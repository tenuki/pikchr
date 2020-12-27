Pikchr - Diagram renderer
=========================

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

pikchr('line ; box "Hello," "World!"; arrow')
```

No support yet to custom class in output svg element nor flags. Also still 
not return output size.
