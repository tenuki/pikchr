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

napi_value ParrotMethod(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value world;
  size_t source_len;
  size_t argc = 1;
  napi_value args[1];
  napi_valuetype valuetype0;


  status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  assert(status == napi_ok);

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

  char *result = pikchr(source, NULL, 0, NULL, NULL);
  free(source);
  if(result==NULL)
    return RetError(env, "pikchr error");

  status = napi_create_string_utf8(env, result, strlen(result), &world);
  free(result);

  assert(status == napi_ok);
  return world;
}


#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }


napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("pikchr", ParrotMethod);
  status = napi_define_properties(env, exports, 1, &desc);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
