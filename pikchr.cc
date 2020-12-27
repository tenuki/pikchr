#define NAPI_VERSION 1
#include <node_api.h>


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

extern "C" {
char *pikchr(
    const char *zText,     /* Input PIKCHR source text.  zero-terminated */
    const char *zClass,    /* Add class="%s" to <svg> markup */
    unsigned int mFlags,   /* Flags used to influence rendering behavior */
    int *pnWidth,          /* Write width of <svg> here, if not NULL */
    int *pnHeight          /* Write height here, if not NULL */
  );
}

napi_value RetError(napi_env env, char* msg) {
    napi_throw_type_error(env, nullptr, msg);
    return nullptr;
}

napi_status get_charp_from_string(napi_env env, napi_value value, char **charp) {
    napi_valuetype valuetype;
    napi_status status;
    size_t source_len;

    status = napi_typeof(env, value, &valuetype);
    assert(status == napi_ok);
    if (valuetype!=napi_string)
        return napi_generic_failure;

    status = napi_get_value_string_utf8(env, value, NULL, 0, &source_len);
    assert(status==napi_ok);
    (*charp) = (char*) malloc(source_len+1);
    if(charp==NULL)
        return napi_generic_failure;

    status = napi_get_value_string_utf8(env, value, *charp, source_len+1, &source_len);
    assert(status==napi_ok);
    return napi_ok;
}

napi_status get_string_property(napi_env env, napi_value obj, char *utf8propname, char** value) {
      napi_value tmpvalue;
      napi_status status;
      bool result;
      *value = (char*)NULL;

      status = napi_has_named_property(env, obj, utf8propname, &result);
      assert(status == napi_ok);
      if (!result)
        return napi_ok;

      status = napi_get_named_property(env, obj, utf8propname, &tmpvalue);
      assert(status == napi_ok);

      return get_charp_from_string(env, tmpvalue, value);
}



napi_status get_bool_from_boolean(napi_env env, napi_value value, bool *boolvalue) {
    napi_valuetype valuetype;
    napi_status status;

    status = napi_typeof(env, value, &valuetype);
    assert(status == napi_ok);
    if (valuetype!=napi_boolean)
        return napi_generic_failure;

    status = napi_get_value_bool(env, value, boolvalue);
    assert(status==napi_ok);
    return napi_ok;
}

napi_status get_bool_property(napi_env env, napi_value obj, char *utf8propname, bool* boolvalue, bool defaultvalue) {
      napi_value tmpvalue;
      bool result;
      napi_status status;
      *boolvalue = defaultvalue;

      status = napi_has_named_property(env, obj, utf8propname, &result);
      assert(status == napi_ok);
      if (!result)
        return napi_ok;

      status = napi_get_named_property(env, obj, utf8propname, &tmpvalue);
      assert(status == napi_ok);

      return get_bool_from_boolean(env, tmpvalue, boolvalue);
}


napi_value pikchr_ex(napi_env env, napi_callback_info info, bool ex) {
  int width, height;
  napi_status status;
  napi_value world;
  size_t source_len;
  size_t argc = 2;
  napi_value args[2];
  napi_valuetype valuetype0;
  napi_value output, _width, _height;
  char *zclass = NULL;
  int flags = 0;


  status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  assert(status == napi_ok);

  if ((argc<=0)||(argc>2))
    return RetError(env, "Wrong arguments");

  status = napi_typeof(env, args[0], &valuetype0);
  assert(status == napi_ok);
  if (valuetype0!=napi_string)
    return RetError(env, "Wrong arguments");


  status = napi_get_value_string_utf8(env, args[0], NULL, 0, &source_len);
  assert(status==napi_ok);
  char *source = (char*) malloc(source_len+1);
  if(source==NULL)
    return RetError(env, "pikchr error");

  status = napi_get_value_string_utf8(env, args[0], source, source_len+1, &source_len);
  assert(status==napi_ok);

  if (argc==2) {
      status = napi_typeof(env, args[1], &valuetype0);
      assert(status == napi_ok);
      if (valuetype0!=napi_object)
        return RetError(env, "Wrong arguments1");

      status = get_string_property(env, args[1], "class_name", (char**) &zclass);
      if (status==napi_generic_failure)
        return RetError(env, "Wrong arguments2");
      assert(status == napi_ok);

      bool dark_mode;
      status = get_bool_property(env, args[1], "dark_mode", (bool*)&dark_mode, false);
      if (status==napi_generic_failure)
        return RetError(env, "Wrong arguments3");
      assert(status == napi_ok);
      if (dark_mode)
        flags = flags | 0x0002;

      bool text_errors;
      status = get_bool_property(env, args[1], "text_errors", (bool*)&text_errors, false);
      if (status==napi_generic_failure)
        return RetError(env, "Wrong arguments4");
      assert(status == napi_ok);
      if (text_errors)
        flags = flags | 0x0001;
  }

  char *result = pikchr(source, zclass, flags, &width, &height);
  free(source);
  if (zclass!=NULL) {
    free(zclass);
  }
  if(result==NULL)
    return RetError(env, "pikchr error");

  status = napi_create_string_utf8(env, result, strlen(result), &output);
  assert(status == napi_ok);
  free(result);

  if (!ex) {
    return output;
  }

  status = napi_create_object(env, &world);
  assert(status == napi_ok);

  switch(sizeof(int)) {
    case 4: {
        status = napi_create_int32(env, width, &_width);
        assert(status == napi_ok);
        status = napi_create_int32(env, height, &_height);
        assert(status == napi_ok);
        break;
    };
    case 8: {
        status = napi_create_int64(env, width, &_width);
        assert(status == napi_ok);
        status = napi_create_int64(env, height, &_height);
        assert(status == napi_ok);
        break;
    };
    default: {
        return RetError(env, "unexpected arch: check int size.");
    }
  }

  status = napi_set_named_property(env, world, "output", output);
  assert(status == napi_ok);
  status = napi_set_named_property(env, world, "width", _width);
  assert(status == napi_ok);
  status = napi_set_named_property(env, world, "height", _height);
  assert(status == napi_ok);
  return world;
}


napi_value PikchrExMethod(napi_env env, napi_callback_info info) {
  return pikchr_ex(env, info, true);
}


napi_value PikchrMethod(napi_env env, napi_callback_info info) {
//  napi_status status;
//  napi_value world;
//  size_t source_len;
//  size_t argc = 1;
//  napi_value args[1];
//  napi_valuetype valuetype0;
  return pikchr_ex(env, info, false);
//  status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
//  assert(status == napi_ok);
//
//  status = napi_typeof(env, args[0], &valuetype0);
//  assert(status == napi_ok);
//  if (valuetype0!=napi_string)
//    return RetError(env, "Wrong arguments");
//
//  status = napi_get_value_string_utf8(env, args[0], NULL, 0, &source_len);
//  assert(status==napi_ok);
//  char *source = (char*) malloc(source_len+1);
//  if(source==NULL)
//    return RetError(env, "pikchr error");
//
//  status = napi_get_value_string_utf8(env, args[0], source, source_len+1, &source_len);
//  assert(status==napi_ok);
//
//  char *result = pikchr(source, NULL, 0, NULL, NULL);
//  free(source);
//  if(result==NULL)
//    return RetError(env, "pikchr error");
//
//  status = napi_create_string_utf8(env, result, strlen(result), &world);
//  free(result);
//
//  assert(status == napi_ok);
//  return world;
}




#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }


napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc[2];
  desc[0] = DECLARE_NAPI_METHOD("pikchr", PikchrMethod);
  desc[1] = DECLARE_NAPI_METHOD("pikchrex", PikchrExMethod);
  status = napi_define_properties(env, exports, 2, (napi_property_descriptor*)&desc);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
