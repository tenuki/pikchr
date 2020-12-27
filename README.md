Pikchr - Diagram renderer
=========================

[![Actions Status](https://github.com/tenuki/pikchr/workflows/On Commit Build and Tests/badge.svg
)](https://github.com/tenuki/pikchr/actions)
[![Actions Status](https://github.com/tenuki/pikchr/workflows/On new release Build and Tests/badge.svg
)](https://github.com/tenuki/pikchr/actions)


Taken from the [pikchr](https://pikchr.org/home/doc/trunk/homepage.md) homepage:

> Pikchr (pronounced like "picture") is a [PIC][1]-like markup
> language for diagrams in technical documentation.  Pikchr is
> designed to be embedded in [fenced code blocks][2] of
> Markdown (or in similar mechanisms in other markup languages)
> to provide a convenient means of showing diagrams.
> 
> [1]: https://en.wikipedia.org/wiki/Pic_language
> [2]: https://spec.commonmark.org/0.29/#fenced-code-blocks

This is the source version addon for nodejs. It uses node's NAPI which makes 
it compatible with many node versions.

You can use it as follows:

```javascript
const pikchr = require('pikchr');

pikchr.pikchr('line ; box "Hello," "World!"; arrow') // -> svg string

pikchr.pikchrex('line ; box "Hello!"', options={}) // -> result object
```

Where allowed `options` are: 
 * `class_name`: a string for root svg's class attribute
 * `dark_mode`: when this flag is used, Pikchr inverts the colors in the 
   diagram to make them suitable for "dark mode" pages. The main Pikchr website has a dark-mode counterpart that you can visit to see the effects of this flag on Pikchr diagrams
 * `text_errors`: mormally, the text returned by pikchr in the event of an 
   error is formatted as HTML. Setting this flag causes the error message to be plain text

 `text_errors` and `dark_mode` must be booleans and `class_name` a string. 
 All of them are optional.


Check _flags passed to pikchr_ in [pikchr documentation][1] for more 
detailed information.


[1]: https://pikchr.org/home/doc/trunk/doc/integrate.md
