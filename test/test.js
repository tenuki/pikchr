const assert = require('assert');
const pikchr = require('../build/Release/pikchr').pikchr;


describe('Basic Tests', function () {
    describe('Check some errors', function () {
        it('Error is dump to output too', function () {
            assert.strictEqual(pikchr(`test`), `<div><pre>
/*    1 */  test
           
ERROR: syntax error
</pre></div>
`);
        });

        it('Error other', function () {
            assert.throws(() => {
                    pikchr();
                },
                (err) => {
                    assert(/Wrong arguments/.test(err));
                    assert(err instanceof Error);
                    return true;
                })
        });
    });

    describe('Pikchr Examples', function () {
        it('Very basic example', function() {
           assert.strictEqual(pikchr('line; box "Hello," "World!"; arrow'), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 260.64 76.32">
<path d="M2,38L74,38"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M74,74L182,74L182,2L74,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="128" y="28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">Hello,</text>
<text x="128" y="48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">World!</text>
<polygon points="254,38 242,42 242,33" style="fill:rgb(0,0,0)"/>
<path d="M182,38L248,38"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
`)
        });

        it('How To Build Pikchr', function () {
            assert.strictEqual(pikchr(`filewid *= 1.2
Src:      file "pikchr.y"; move
LemonSrc: file "lemon.c"; move
Lempar:   file "lempar.y"; move
          arrow down from LemonSrc.s
CC1:      oval "C-Compiler" ht 50%
          arrow " generates" ljust above
Lemon:    oval "lemon" ht 50%
          arrow from Src chop down until even with CC1 \
            then to Lemon.nw rad 20px
          "Pikchr source " rjust "code input " rjust \
            at 2nd vertex of previous
          arrow from Lempar chop down until even with CC1 \
            then to Lemon.ne rad 20px
          " parser template" ljust " resource file" ljust \
            at 2nd vertex of previous
PikSrc:   file "pikchr.c" with .n at lineht below Lemon.s
          arrow from Lemon to PikSrc chop
          arrow down from PikSrc.s
CC2:      oval "C-Compiler" ht 50%
          arrow
Out:      file "pikchr.o" "or" "pikchr.exe" wid 110%`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 581.587 796.32">
<path d="M79,110L166,110L166,23L144,2L79,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M144,2L144,23L166,23"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="122" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pikchr.y</text>
<path d="M238,110L324,110L324,23L302,2L238,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M302,2L302,23L324,23"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">lemon.c</text>
<path d="M396,110L482,110L482,23L461,2L396,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M461,2L461,23L482,23"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="439" y="56" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">lempar.y</text>
<polygon points="281,182 276,170 285,170" style="fill:rgb(0,0,0)"/>
<path d="M281,110L281,176"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M227,218L335,218A18 18 0 0 0 353 200A18 18 0 0 0 335 182L227,182A18 18 0 0 0 209 200A18 18 0 0 0 227 218Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="200" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C-Compiler</text>
<polygon points="281,290 276,278 285,278" style="fill:rgb(0,0,0)"/>
<path d="M281,218L281,284"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="242" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central"> generates</text>
<path d="M227,326L335,326A18 18 0 0 0 353 308A18 18 0 0 0 335 290L227,290A18 18 0 0 0 209 308A18 18 0 0 0 227 326Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="308" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">lemon</text>
<polygon points="214,295 203,290 209,284" style="fill:rgb(0,0,0)"/>
<path d="M122,110 L 122,170 Q 122,200 143,221 L 189,269 L 210,291"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="122" y="190" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">Pikchr source </text>
<text x="122" y="210" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">code input </text>
<polygon points="348,295 352,284 359,290" style="fill:rgb(0,0,0)"/>
<path d="M439,110 L 439,170 Q 439,200 418,221 L 372,269 L 352,291"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="439" y="190" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central"> parser template</text>
<text x="439" y="210" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central"> resource file</text>
<path d="M238,506L324,506L324,419L302,398L238,398Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M302,398L302,419L324,419"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="452" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pikchr.c</text>
<polygon points="281,398 276,386 285,386" style="fill:rgb(0,0,0)"/>
<path d="M281,326L281,392"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="281,578 276,566 285,566" style="fill:rgb(0,0,0)"/>
<path d="M281,506L281,572"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M227,614L335,614A18 18 0 0 0 353 596A18 18 0 0 0 335 578L227,578A18 18 0 0 0 209 596A18 18 0 0 0 227 614Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="596" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C-Compiler</text>
<polygon points="281,686 276,674 285,674" style="fill:rgb(0,0,0)"/>
<path d="M281,614L281,680"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M233,794L328,794L328,707L307,686L233,686Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M307,686L307,707L328,707"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="281" y="720" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pikchr.o</text>
<text x="281" y="740" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">or</text>
<text x="281" y="760" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pikchr.exe</text>
</svg>
`);
        });

        it('SQLite Architecture Diagram', function () {
            assert.strictEqual(pikchr(`lineht *= 0.4
    $margin = lineht*2.5
    scale = 0.75
    fontscale = 1.1
    charht *= 1.15
    down
In: box "Interface" wid 150% ht 75% fill white
    arrow
CP: box same "SQL Command" "Processor"
    arrow
VM: box same "Virtual Machine"
    arrow down 1.25*$margin
BT: box same "B-Tree"
    arrow
    box same "Pager"
    arrow
OS: box same "OS Interface"
    box same with .w at 1.25*$margin east of 1st box.e "Tokenizer"
    arrow
    box same "Parser"
    arrow
CG: box same ht 200% "Code" "Generator"
UT: box same as 1st box at (Tokenizer,Pager) "Utilities"
    move lineht
TC: box same "Test Code"
    arrow from CP to 1/4<Tokenizer.sw,Tokenizer.nw> chop
    arrow from 1/3<CG.nw,CG.sw> to CP chop

    box ht (In.n.y-VM.s.y)+$margin wid In.wid+$margin \\
       at CP fill 0xd8ecd0 behind In
    line invis from 0.25*$margin east of last.sw up last.ht \\
        "Core" italic aligned

    box ht (BT.n.y-OS.s.y)+$margin wid In.wid+$margin \\
       at Pager fill 0xd0ece8 behind In
    line invis from 0.25*$margin east of last.sw up last.ht \\
       "Backend" italic aligned

    box ht (Tokenizer.n.y-CG.s.y)+$margin wid In.wid+$margin \\
       at 1/2<Tokenizer.n,CG.s> fill 0xe8d8d0 behind In
    line invis from 0.25*$margin west of last.se up last.ht \\
       "SQL Compiler" italic aligned

    box ht (UT.n.y-TC.s.y)+$margin wid In.wid+$margin \\
       at 1/2<UT,TC> fill 0xe0ecc8 behind In
    line invis from 0.25*$margin west of last.se up last.ht \\
      "Accessories" italic aligned`), `<svg xmlns='http://www.w3.org/2000/svg' width="367" height="453" viewBox="0 0 490.32 605.52">
<path d="M2,293L236,293L236,2L2,2Z"  style="fill:rgb(216,236,208);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M2,603L236,603L236,311L2,311Z"  style="fill:rgb(208,236,232);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M254,347L488,347L488,2L254,2Z"  style="fill:rgb(232,216,208);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M254,603L488,603L488,394L254,394Z"  style="fill:rgb(224,236,200);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,92L200,92L200,38L38,38Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="65" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Interface</text>
<polygon points="119,120 114,109 123,109" style="fill:rgb(0,0,0)"/>
<path d="M119,92L119,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,174L200,174L200,120L38,120Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="135" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">SQL Command</text>
<text x="119" y="160" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Processor</text>
<polygon points="119,203 114,192 123,192" style="fill:rgb(0,0,0)"/>
<path d="M119,174L119,198"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,257L200,257L200,203L38,203Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="230" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Virtual Machine</text>
<polygon points="119,347 114,336 123,336" style="fill:rgb(0,0,0)"/>
<path d="M119,257L119,342"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,401L200,401L200,347L38,347Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="374" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">B-Tree</text>
<polygon points="119,430 114,419 123,419" style="fill:rgb(0,0,0)"/>
<path d="M119,401L119,424"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,484L200,484L200,430L38,430Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="457" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Pager</text>
<polygon points="119,513 114,501 123,501" style="fill:rgb(0,0,0)"/>
<path d="M119,484L119,507"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M38,567L200,567L200,513L38,513Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="119" y="540" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">OS Interface</text>
<path d="M290,92L452,92L452,38L290,38Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="65" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Tokenizer</text>
<polygon points="371,120 366,109 375,109" style="fill:rgb(0,0,0)"/>
<path d="M371,92L371,115"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,174L452,174L452,120L290,120Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="147" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Parser</text>
<polygon points="371,203 366,192 375,192" style="fill:rgb(0,0,0)"/>
<path d="M371,174L371,198"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M290,311L452,311L452,203L290,203Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="245" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Code</text>
<text x="371" y="270" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Generator</text>
<path d="M290,484L452,484L452,430L290,430Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="457" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Utilities</text>
<path d="M290,567L452,567L452,513L290,513Z"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="540" text-anchor="middle" fill="rgb(0,0,0)" font-size="110%" dominant-baseline="central">Test Code</text>
<polygon points="290,78 281,87 277,79" style="fill:rgb(0,0,0)"/>
<path d="M200,120L284,81"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="200,174 212,178 206,185" style="fill:rgb(0,0,0)"/>
<path d="M290,239L204,178"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="20" y="147" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" font-size="110%" transform="rotate(-90 20,147)" dominant-baseline="central">Core</text>
<text x="20" y="457" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" font-size="110%" transform="rotate(-90 20,457)" dominant-baseline="central">Backend</text>
<text x="470" y="174" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" font-size="110%" transform="rotate(-90 470,174)" dominant-baseline="central">SQL Compiler</text>
<text x="470" y="498" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" font-size="110%" transform="rotate(-90 470,498)" dominant-baseline="central">Accessories</text>
</svg>
`)
        })

        it('Syntax diagrams', function () {
            assert.strictEqual(pikchr(`$r = 0.2in
linerad = 0.75*$r
linewid = 0.25

# Start and end blocks
#
box "element" bold fit
line down 50% from last box.sw
dot rad 250% color black
X0: last.e + (0.3,0)
arrow from last dot to X0
move right 3.9in
box wid 5% ht 25% fill black
X9: last.w - (0.3,0)
arrow from X9 to last box.w


# The main rule that goes straight through from start to finish
#
box "object-definition" italic fit at 11/16 way between X0 and X9
arrow to X9
arrow from X0 to last box.w

# The LABEL: rule
#
arrow right $r from X0 then down 1.25*$r then right $r
oval " LABEL " fit
arrow 50%
oval "\\":\\"" fit
arrow 200%
box "position" italic fit
arrow
line right until even with X9 - ($r,0) \\
  then up until even with X9 then to X9
arrow from last oval.e right $r*0.5 then up $r*0.8 right $r*0.8
line up $r*0.45 right $r*0.45 then right

# The VARIABLE = rule
#
arrow right $r from X0 then down 2.5*$r then right $r
oval " VARIABLE " fit
arrow 70%
box "assignment-operator" italic fit
arrow 70%
box "expr" italic fit
line right until even with X9 - ($r,0) \\
  then up until even with X9 then to X9

# The PRINT rule
#
arrow right $r from X0 then down 3.75*$r then right $r
oval "\\"print\\"" fit
arrow
box "print-args" italic fit
line right until even with X9 - ($r,0) \\
  then up until even with X9 then to X9`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 619.92 193.68">
<path d="M7,32L93,32L93,2L7,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="50" y="17" text-anchor="middle" font-weight="bold" fill="rgb(0,0,0)" dominant-baseline="central">element</text>
<path d="M7,32L7,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="7" cy="68" r="5.4" style="fill:rgb(0,0,0);stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="50,68 39,72 39,64" style="fill:rgb(0,0,0)"/>
<path d="M7,68L45,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M612,77L617,77L617,59L612,59Z"  style="fill:rgb(0,0,0);stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="612,68 600,72 600,64" style="fill:rgb(0,0,0)"/>
<path d="M569,68L606,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M332,83L481,83L481,53L332,53Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="407" y="68" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">object-definition</text>
<polygon points="569,68 557,72 557,64" style="fill:rgb(0,0,0)"/>
<path d="M481,68L563,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="332,68 321,72 321,64" style="fill:rgb(0,0,0)"/>
<path d="M50,68L326,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="108,104 96,108 96,100" style="fill:rgb(0,0,0)"/>
<path d="M50,68 L 65,68 Q 79,68 79,86 Q 79,104 91,104 L 102,104"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M123,119L172,119A15 15 0 0 0 188 104A15 15 0 0 0 172 89L123,89A15 15 0 0 0 108 104A15 15 0 0 0 123 119Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="148" y="104" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central"> LABEL </text>
<polygon points="206,104 194,108 194,100" style="fill:rgb(0,0,0)"/>
<path d="M188,104L200,104"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M221,119L222,119A15 15 0 0 0 237 104A15 15 0 0 0 222 89L221,89A15 15 0 0 0 206 104A15 15 0 0 0 221 119Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="221" y="104" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">":"</text>
<polygon points="309,104 298,108 298,100" style="fill:rgb(0,0,0)"/>
<path d="M237,104L303,104"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M309,119L388,119L388,89L309,89Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="348" y="104" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">position</text>
<polygon points="424,104 412,108 412,100" style="fill:rgb(0,0,0)"/>
<path d="M388,104L418,104"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M424,104 L 518,104 Q 540,104 540,86 Q 540,68 554,68 L 569,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="275,81 269,92 263,86" style="fill:rgb(0,0,0)"/>
<path d="M237,104 L 244,104 Q 252,104 261,94 L 271,85"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M275,81 L 281,74 Q 288,68 306,68 L 324,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="108,140 96,144 96,136" style="fill:rgb(0,0,0)"/>
<path d="M50,68 L 65,68 Q 79,68 79,90 L 79,118 Q 79,140 91,140 L 102,140"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M123,155L204,155A15 15 0 0 0 219 140A15 15 0 0 0 204 125L123,125A15 15 0 0 0 108 140A15 15 0 0 0 123 155Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="164" y="140" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central"> VARIABLE </text>
<polygon points="244,140 233,144 233,136" style="fill:rgb(0,0,0)"/>
<path d="M219,140L239,140"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M244,155L431,155L431,125L244,125Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="337" y="140" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">assignment-operator</text>
<polygon points="456,140 444,144 444,136" style="fill:rgb(0,0,0)"/>
<path d="M431,140L450,140"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M456,155L505,155L505,125L456,125Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="480" y="140" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">expr</text>
<path d="M505,140 L 522,140 Q 540,140 540,118 L 540,90 Q 540,68 554,68 L 569,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="108,176 96,180 96,172" style="fill:rgb(0,0,0)"/>
<path d="M50,68 L 65,68 Q 79,68 79,90 L 79,154 Q 79,176 91,176 L 102,176"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M123,191L160,191A15 15 0 0 0 175 176A15 15 0 0 0 160 161L123,161A15 15 0 0 0 108 176A15 15 0 0 0 123 191Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="141" y="176" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">"print"</text>
<polygon points="211,176 199,180 199,172" style="fill:rgb(0,0,0)"/>
<path d="M175,176L205,176"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M211,191L306,191L306,161L211,161Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="259" y="176" text-anchor="middle" font-style="italic" fill="rgb(0,0,0)" dominant-baseline="central">print-args</text>
<path d="M306,176 L 518,176 Q 540,176 540,154 L 540,90 Q 540,68 554,68 L 569,68"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
`);
        });

        it('Swimlanes', function () {
            assert.strictEqual(pikchr(`$laneh = 0.75

    # Draw the lanes
    down
    box width 3.5in height $laneh fill 0xacc9e3
    box same fill 0xc5d8ef
    box same as first box
    box same as 2nd box
    line from 1st box.sw+(0.2,0) up until even with 1st box.n \\
      "Alan" above aligned
    line from 2nd box.sw+(0.2,0) up until even with 2nd box.n \\
      "Betty" above aligned
    line from 3rd box.sw+(0.2,0) up until even with 3rd box.n \\
      "Charlie" above aligned
    line from 4th box.sw+(0.2,0) up until even with 4th box.n \\
       "Darlene" above aligned

    # fill in content for the Alice lane
    right
A1: circle rad 0.1in at end of first line + (0.2,-0.2) \\
       fill white thickness 1.5px "1" 
    arrow right 50%
    circle same "2"
    arrow right until even with first box.e - (0.65,0.0)
    ellipse "future" fit fill white height 0.2 width 0.5 thickness 1.5px
A3: circle same at A1+(0.8,-0.3) "3" fill 0xc0c0c0
    arrow from A1 to last circle chop "fork!" below aligned

    # content for the Betty lane
B1: circle same as A1 at A1-(0,$laneh) "1"
    arrow right 50%
    circle same "2"
    arrow right until even with first ellipse.w
    ellipse same "future"
B3: circle same at A3-(0,$laneh) "3"
    arrow right 50%
    circle same as A3 "4"
    arrow from B1 to 2nd last circle chop

    # content for the Charlie lane
C1: circle same as A1 at B1-(0,$laneh) "1"
    arrow 50%
    circle same "2"
    arrow right 0.8in "goes" "offline"
C5: circle same as A3 "5"
    arrow right until even with first ellipse.w \\
      "back online" above "pushes 5" below "pulls 3 &amp; 4" below
    ellipse same "future"

    # content for the Darlene lane
D1: circle same as A1 at C1-(0,$laneh) "1"
    arrow 50%
    circle same "2"
    arrow right until even with C5.w
    circle same "5"
    arrow 50%
    circle same as A3 "6"
    arrow right until even with first ellipse.w
    ellipse same "future"
D3: circle same as B3 at B3-(0,2*$laneh) "3"
    arrow 50%
    circle same "4"
    arrow from D1 to D3 chop`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 508.32 436.32">
<path d="M2,110L506,110L506,2L2,2Z"  style="fill:rgb(172,201,227);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M2,218L506,218L506,110L2,110Z"  style="fill:rgb(197,216,239);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M2,326L506,326L506,218L2,218Z"  style="fill:rgb(172,201,227);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M2,434L506,434L506,326L2,326Z"  style="fill:rgb(197,216,239);stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M30,110L30,2"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="30" y="44" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 30,56)" dominant-baseline="central">Alan</text>
<path d="M30,218L30,110"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="30" y="152" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 30,164)" dominant-baseline="central">Betty</text>
<path d="M30,326L30,218"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="30" y="260" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 30,272)" dominant-baseline="central">Charlie</text>
<path d="M30,434L30,326"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="30" y="368" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(-90 30,380)" dominant-baseline="central">Darlene</text>
<circle cx="59" cy="30" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="59" y="30" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">1</text>
<polygon points="110,30 98,35 98,26" style="fill:rgb(0,0,0)"/>
<path d="M74,30L104,30"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="124" cy="30" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="124" y="30" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">2</text>
<polygon points="412,30 401,35 401,26" style="fill:rgb(0,0,0)"/>
<path d="M138,30L406,30"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<ellipse cx="448" cy="30" rx="36" ry="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="448" y="30" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">future</text>
<circle cx="174" cy="74" r="14.4"  style="fill:rgb(192,192,192);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="174" y="74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">3</text>
<polygon points="161,69 149,69 152,61" style="fill:rgb(0,0,0)"/>
<path d="M73,36L156,67"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="117" y="64" text-anchor="middle" fill="rgb(0,0,0)" transform="rotate(20.55604522 117,52)" dominant-baseline="central">fork!</text>
<circle cx="59" cy="138" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="59" y="138" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">1</text>
<polygon points="110,138 98,143 98,134" style="fill:rgb(0,0,0)"/>
<path d="M74,138L104,138"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="124" cy="138" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="124" y="138" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">2</text>
<polygon points="412,138 401,143 401,134" style="fill:rgb(0,0,0)"/>
<path d="M138,138L406,138"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<ellipse cx="448" cy="138" rx="36" ry="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="448" y="138" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">future</text>
<circle cx="174" cy="182" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="174" y="182" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">3</text>
<polygon points="225,182 213,186 213,177" style="fill:rgb(0,0,0)"/>
<path d="M189,182L219,182"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="239" cy="182" r="14.4"  style="fill:rgb(192,192,192);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="239" y="182" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">4</text>
<polygon points="161,177 149,177 152,169" style="fill:rgb(0,0,0)"/>
<path d="M73,144L156,175"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="59" cy="246" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="59" y="246" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">1</text>
<polygon points="110,246 98,251 98,242" style="fill:rgb(0,0,0)"/>
<path d="M74,246L104,246"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="124" cy="246" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="124" y="246" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">2</text>
<polygon points="254,246 242,251 242,242" style="fill:rgb(0,0,0)"/>
<path d="M138,246L248,246"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="196" y="235" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">goes</text>
<text x="196" y="258" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">offline</text>
<circle cx="268" cy="246" r="14.4"  style="fill:rgb(192,192,192);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="268" y="246" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">5</text>
<polygon points="412,246 401,251 401,242" style="fill:rgb(0,0,0)"/>
<path d="M282,246L406,246"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="347" y="235" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">back online</text>
<text x="347" y="258" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pushes 5</text>
<text x="347" y="278" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">pulls 3 &amp; 4</text>
<ellipse cx="448" cy="246" rx="36" ry="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="448" y="246" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">future</text>
<circle cx="59" cy="354" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="59" y="354" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">1</text>
<polygon points="110,354 98,359 98,350" style="fill:rgb(0,0,0)"/>
<path d="M74,354L104,354"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="124" cy="354" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="124" y="354" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">2</text>
<polygon points="254,354 242,359 242,350" style="fill:rgb(0,0,0)"/>
<path d="M138,354L248,354"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="268" cy="354" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="268" y="354" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">5</text>
<polygon points="318,354 307,359 307,350" style="fill:rgb(0,0,0)"/>
<path d="M282,354L313,354"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="333" cy="354" r="14.4"  style="fill:rgb(192,192,192);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="333" y="354" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">6</text>
<polygon points="412,354 401,359 401,350" style="fill:rgb(0,0,0)"/>
<path d="M347,354L406,354"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<ellipse cx="448" cy="354" rx="36" ry="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="448" y="354" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">future</text>
<circle cx="174" cy="398" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="174" y="398" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">3</text>
<polygon points="225,398 213,402 213,393" style="fill:rgb(0,0,0)"/>
<path d="M189,398L219,398"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="239" cy="398" r="14.4"  style="fill:rgb(255,255,255);stroke-width:2.25;stroke:rgb(0,0,0);" />
<text x="239" y="398" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">4</text>
<polygon points="161,393 149,393 152,385" style="fill:rgb(0,0,0)"/>
<path d="M73,360L156,391"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
`);
        });

        it('Graphs', function () {
            assert.strictEqual(pikchr(`scale = 0.8
fill = white
linewid *= 0.5
circle "C0" fit
circlerad = previous.radius
arrow
circle "C1"
arrow
circle "C2"
arrow
circle "C4"
arrow
circle "C6"
circle "C3" at dist(C2,C4) heading 30 from C2
arrow
circle "C5"
arrow from C2 to C3 chop
C3P: circle "C3'" at dist(C4,C6) heading 30 from C6
arrow right from C3P.e
C5P: circle "C5'"
arrow from C6 to C3P chop

box height C3.y-C2.y \\
    width (C5P.e.x-C0.w.x)+linewid \\
    with .w at 0.5*linewid west of C0.w \\
    behind C0 \\
    fill 0xc6e2ff thin color gray
box same width previous.e.x - C2.w.x \\
    with .se at previous.ne \\
    fill 0x9accfc
"trunk" below at 2nd last box.s
"feature branch" above at last box.n

circle "C0" at 3.7cm south of C0
arrow
circle "C1"
arrow
circle "C2"
arrow
circle "C4"
arrow
circle "C6"
circle "C3" at dist(C2,C4) heading 30 from C2
arrow
circle "C5"
arrow
circle "C7"
arrow from C2 to C3 chop
arrow from C6 to C7 chop

box height C3.y-C2.y \\
    width (C7.e.x-C0.w.x)+1.5*C1.radius \\
    with .w at 0.5*linewid west of C0.w \\
    behind C0 \\
    fill 0xc6e2ff thin color gray
box same width previous.e.x - C2.w.x \\
    with .se at previous.ne \\
    fill 0x9accfc
"trunk" below at 2nd last box.s
"feature branch" above at last box.n`), `<svg xmlns='http://www.w3.org/2000/svg' width="429" height="316" viewBox="0 0 537.378 396.448">
<path d="M2,164L535,164L535,93L2,93Z"  style="fill:rgb(198,226,255);stroke-width:1.4472;stroke:rgb(128,128,128);" />
<path d="M184,93L535,93L535,22L184,22Z"  style="fill:rgb(154,204,252);stroke-width:1.4472;stroke:rgb(128,128,128);" />
<path d="M2,374L451,374L451,303L2,303Z"  style="fill:rgb(198,226,255);stroke-width:1.4472;stroke:rgb(128,128,128);" />
<path d="M184,303L451,303L451,232L184,232Z"  style="fill:rgb(154,204,252);stroke-width:1.4472;stroke:rgb(128,128,128);" />
<circle cx="43" cy="128" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="43" y="128" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C0</text>
<polygon points="102,128 90,133 90,124" style="fill:rgb(0,0,0)"/>
<path d="M66,128L96,128"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="125" cy="128" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="125" y="128" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C1</text>
<polygon points="184,128 172,133 172,124" style="fill:rgb(0,0,0)"/>
<path d="M148,128L178,128"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="207" cy="128" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="207" y="128" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C2</text>
<polygon points="266,128 254,133 254,124" style="fill:rgb(0,0,0)"/>
<path d="M230,128L260,128"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="289" cy="128" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="289" y="128" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C4</text>
<polygon points="348,128 336,133 336,124" style="fill:rgb(0,0,0)"/>
<path d="M312,128L342,128"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="371" cy="128" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="128" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C6</text>
<circle cx="248" cy="57" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="248" y="57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C3</text>
<polygon points="307,57 295,62 295,53" style="fill:rgb(0,0,0)"/>
<path d="M271,57L301,57"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="330" cy="57" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="330" y="57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C5</text>
<polygon points="236,77 234,89 227,85" style="fill:rgb(0,0,0)"/>
<path d="M218,108L233,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="412" cy="57" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="412" y="57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C3'</text>
<polygon points="471,57 459,62 459,53" style="fill:rgb(0,0,0)"/>
<path d="M435,57L465,57"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="494" cy="57" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="494" y="57" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C5'</text>
<polygon points="400,77 398,89 391,85" style="fill:rgb(0,0,0)"/>
<path d="M382,108L397,82"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="268" y="174" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">trunk</text>
<text x="359" y="12" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">feature branch</text>
<circle cx="43" cy="338" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="43" y="338" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C0</text>
<polygon points="102,338 90,342 90,334" style="fill:rgb(0,0,0)"/>
<path d="M66,338L96,338"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="125" cy="338" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="125" y="338" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C1</text>
<polygon points="184,338 172,342 172,334" style="fill:rgb(0,0,0)"/>
<path d="M148,338L178,338"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="207" cy="338" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="207" y="338" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C2</text>
<polygon points="266,338 254,342 254,334" style="fill:rgb(0,0,0)"/>
<path d="M230,338L260,338"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="289" cy="338" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="289" y="338" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C4</text>
<polygon points="348,338 336,342 336,334" style="fill:rgb(0,0,0)"/>
<path d="M312,338L342,338"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="371" cy="338" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="371" y="338" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C6</text>
<circle cx="248" cy="267" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="248" y="267" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C3</text>
<polygon points="307,267 295,271 295,263" style="fill:rgb(0,0,0)"/>
<path d="M271,267L301,267"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="330" cy="267" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="330" y="267" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C5</text>
<polygon points="389,267 377,271 377,263" style="fill:rgb(0,0,0)"/>
<path d="M353,267L383,267"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="412" cy="267" r="23.0045"  style="fill:rgb(255,255,255);stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="412" y="267" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">C7</text>
<polygon points="236,287 234,299 227,295" style="fill:rgb(0,0,0)"/>
<path d="M218,318L233,292"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="400,287 398,299 391,295" style="fill:rgb(0,0,0)"/>
<path d="M382,318L397,292"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="226" y="384" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">trunk</text>
<text x="317" y="222" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">feature branch</text>
</svg>
`);
        });


        it('Impossible Trident', function () {
            assert.strictEqual(pikchr(`# Impossible trident pikchr script
# https://en.wikipedia.org/wiki/Impossible_trident
# pikchr script by Kees Nuyt, license Creative Commons BY-NC-SA 
# https://creativecommons.org/licenses/by-nc-sa/4.0/

scale = 1.0
eh = 0.5cm
ew = 0.2cm
ed = 2 * eh
er = 0.4cm
lws = 4.0cm
lwm = lws + er
lwl = lwm + er

ellipse height eh width ew
L1: line width lwl from last ellipse.n
line width lwm from last ellipse.s
LV: line height eh down

move right er down ed from last ellipse.n
ellipse height eh width ew
L3: line width lws right from last ellipse.n to LV.end then down eh right ew
line width lwm right from last ellipse.s then to LV.start

move right er down ed from last ellipse.n
ellipse height eh width ew
line width lwl right from last ellipse.n then to L1.end
line width lwl right from last ellipse.s then up eh`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 327.47 146.052">
<ellipse cx="7" cy="16" rx="5.66929" ry="14.1732"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M7,2L279,2"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M7,30L257,30"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M257,30L257,58"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<ellipse cx="30" cy="73" rx="5.66929" ry="14.1732"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M30,58L257,58L257,58L268,87"  style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);" />
<path d="M30,87L279,87L257,30"  style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);" />
<ellipse cx="53" cy="129" rx="5.66929" ry="14.1732"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M53,115L325,115L279,2"  style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);" />
<path d="M53,143L325,143L325,115"  style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);" />
</svg>
`);
        });


        it('PIC from The Brian W. Kernighan paper - page 18', function () {
            assert.strictEqual(pikchr(`define ndblock {
  box wid boxwid/2 ht boxht/2
  down;  box same with .t at bottom of last box;   box same
}
boxht = .2; boxwid = .3; circlerad = .3; dx = 0.05
down; box; box; box; box ht 3*boxht "." "." "."
L: box; box; box invis wid 2*boxwid "hashtab:" with .e at 1st box .w
right
Start: box wid .5 with .sw at 1st box.ne + (.4,.2) "..."
N1: box wid .2 "n1";  D1: box wid .3 "d1"
N3: box wid .4 "n3";  D3: box wid .3 "d3"
box wid .4 "..."
N2: box wid .5 "n2";  D2: box wid .2 "d2"
arrow right from 2nd box
ndblock
spline -> right .2 from 3rd last box then to N1.sw + (dx,0)
spline -> right .3 from 2nd last box then to D1.sw + (dx,0)
arrow right from last box
ndblock
spline -> right .2 from 3rd last box to N2.sw-(dx,.2) to N2.sw+(dx,0)
spline -> right .3 from 2nd last box to D2.sw-(dx,.2) to D2.sw+(dx,0)
arrow right 2*linewid from L
ndblock
spline -> right .2 from 3rd last box to N3.sw + (dx,0)
spline -> right .3 from 2nd last box to D3.sw + (dx,0)
circlerad = .3
circle invis "ndblock"  at last box.e + (1.2,.2)
arrow dashed from last circle.w to 5/8<last circle.w,2nd last box> chop
box invis wid 2*boxwid "ndtable:" with .e at Start.w`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 587.866 292.32">
<path d="M81,88L124,88L124,59L81,59Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M81,117L124,117L124,88L81,88Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M81,146L124,146L124,117L81,117Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M81,232L124,232L124,146L81,146Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="103" y="169" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<text x="103" y="189" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<text x="103" y="209" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">.</text>
<path d="M81,261L124,261L124,232L81,232Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M81,290L124,290L124,261L81,261Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="38" y="74" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">hashtab:</text>
<path d="M182,30L254,30L254,2L182,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="218" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">...</text>
<path d="M254,30L283,30L283,2L254,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="268" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">n1</text>
<path d="M283,30L326,30L326,2L283,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="304" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">d1</text>
<path d="M326,30L384,30L384,2L326,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="355" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">n3</text>
<path d="M384,30L427,30L427,2L384,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="405" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">d3</text>
<path d="M427,30L484,30L484,2L427,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="456" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">...</text>
<path d="M484,30L556,30L556,2L484,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="520" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">n2</text>
<path d="M556,30L585,30L585,2L556,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="571" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">d2</text>
<polygon points="175,102 163,107 163,98" style="fill:rgb(0,0,0)"/>
<path d="M103,102L169,102"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M175,110L196,110L196,95L175,95Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M175,124L196,124L196,110L175,110Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M175,138L196,138L196,124L175,124Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="261,30 259,42 251,38" style="fill:rgb(0,0,0)"/>
<path d="M186,102 L 200,102 Q 214,102 236,69 L 258,35"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="290,30 287,42 280,37" style="fill:rgb(0,0,0)"/>
<path d="M186,117 L 207,117 Q 229,117 258,76 L 287,35"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="258,131 246,136 246,127" style="fill:rgb(0,0,0)"/>
<path d="M186,131L252,131"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M258,138L279,138L279,124L258,124Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M258,153L279,153L279,138L258,138Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M258,167L279,167L279,153L258,153Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="492,30 490,43 483,39" style="fill:rgb(0,0,0)"/>
<path d="M268,131 L 283,131 Q 297,131 387,95 Q 477,59 483,47 L 489,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="564,30 562,43 555,39" style="fill:rgb(0,0,0)"/>
<path d="M268,146 L 290,146 Q 312,146 430,102 Q 549,59 555,47 L 561,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="247,246 235,251 235,242" style="fill:rgb(0,0,0)"/>
<path d="M103,246L241,246"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M247,254L268,254L268,239L247,239Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M247,268L268,268L268,254L247,254Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M247,282L268,282L268,268L247,268Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="333,30 335,43 327,41" style="fill:rgb(0,0,0)"/>
<path d="M258,246 L 272,246 Q 286,246 309,141 L 332,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="391,30 391,43 383,40" style="fill:rgb(0,0,0)"/>
<path d="M258,261 L 279,261 Q 301,261 345,148 L 389,36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="441" y="246" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ndblock</text>
<polygon points="310,255 321,250 322,259" style="fill:rgb(0,0,0)"/>
<path d="M398,246L316,255"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);stroke-dasharray:7.2,7.2;" />
<text x="139" y="16" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">ndtable:</text>
</svg>
`);
        });

        it('PIC from The Brian W. Kernighan paper - page 19', function () {
            assert.strictEqual(pikchr(`        arrow "source" "code"
LA:     box "lexical" "analyzer"
        arrow "tokens" above
P:      box "parser"
        arrow "intermediate" "code" wid 200%
Sem:    box "semantic" "checker"
        arrow
        arrow <-> up from top of LA
LC:     box "lexical" "corrector"
        arrow <-> up from top of P
Syn:    box "syntactic" "corrector"
        arrow up
DMP:    box "diagnostic" "message" "printer"
        arrow <-> right  from east of DMP
ST:     box "symbol" "table"
        arrow from LC.ne to DMP.sw
        arrow from Sem.nw to DMP.se
        arrow <-> from Sem.top to ST.bot`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 692.64 364.32">
<polygon points="74,326 62,330 62,321" style="fill:rgb(0,0,0)"/>
<path d="M2,326L68,326"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="38" y="314" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">source</text>
<text x="38" y="337" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">code</text>
<path d="M74,362L182,362L182,290L74,290Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="128" y="316" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">lexical</text>
<text x="128" y="336" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">analyzer</text>
<polygon points="254,326 242,330 242,321" style="fill:rgb(0,0,0)"/>
<path d="M182,326L248,326"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="218" y="314" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">tokens</text>
<path d="M254,362L362,362L362,290L254,290Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="308" y="326" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">parser</text>
<polygon points="506,326 494,330 494,321" style="fill:rgb(0,0,0)"/>
<path d="M362,326L500,326"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="434" y="314" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">intermediate</text>
<text x="434" y="337" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">code</text>
<path d="M506,362L614,362L614,290L506,290Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="560" y="316" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">semantic</text>
<text x="560" y="336" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">checker</text>
<polygon points="686,326 674,330 674,321" style="fill:rgb(0,0,0)"/>
<path d="M614,326L680,326"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="128,290 123,278 132,278" style="fill:rgb(0,0,0)"/>
<polygon points="128,218 132,229 123,229" style="fill:rgb(0,0,0)"/>
<path d="M128,284L128,223"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M74,218L182,218L182,146L74,146Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="128" y="172" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">lexical</text>
<text x="128" y="192" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">corrector</text>
<polygon points="308,290 303,278 312,278" style="fill:rgb(0,0,0)"/>
<polygon points="308,218 312,229 303,229" style="fill:rgb(0,0,0)"/>
<path d="M308,284L308,223"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M254,218L362,218L362,146L254,146Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="308" y="172" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">syntactic</text>
<text x="308" y="192" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">corrector</text>
<polygon points="308,74 312,85 303,85" style="fill:rgb(0,0,0)"/>
<path d="M308,146L308,79"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M254,74L362,74L362,2L254,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="308" y="18" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">diagnostic</text>
<text x="308" y="38" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">message</text>
<text x="308" y="58" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">printer</text>
<polygon points="362,38 373,33 373,42" style="fill:rgb(0,0,0)"/>
<polygon points="434,38 422,42 422,33" style="fill:rgb(0,0,0)"/>
<path d="M367,38L428,38"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<path d="M434,74L542,74L542,2L434,2Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="488" y="28" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">symbol</text>
<text x="488" y="48" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">table</text>
<polygon points="254,74 249,85 242,79" style="fill:rgb(0,0,0)"/>
<path d="M182,146L250,78"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="362,74 372,81 364,86" style="fill:rgb(0,0,0)"/>
<path d="M506,290L365,78"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="560,290 552,280 560,277" style="fill:rgb(0,0,0)"/>
<polygon points="488,74 495,83 487,86" style="fill:rgb(0,0,0)"/>
<path d="M558,284L489,79"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
</svg>
`);
        });
        it('PIC from The Brian W. Kernighan paper - page 20', function () {
            assert.strictEqual(pikchr(`        circle "DISK"
        arrow "character" "defns" right 150%
CPU:    box "CPU" "(16-bit mini)"
        arrow <- from top of CPU up "input " rjust
        move right from CPU.e
CRT:    "   CRT" ljust
        line from CRT - 0,0.075 up 0.15 \\
                then right 0.5 \\
                then right 0.5 up 0.25 \\
                then down 0.5+0.15 \\
                then left 0.5 up 0.25 \\
                then left 0.5
        arrow from CPU.e right until even with previous.start
Paper:  CRT + 1.05,0.75
        arrow <- from Paper down 1.5
        " ...  paper" ljust at end of last arrow + 0, 0.25
        circle rad 0.05 at Paper + (-0.055, -0.25)
        circle rad 0.05 at Paper + (0.055, -0.25)
        "   rollers" ljust at Paper + (0.1, -0.25)

`), `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 632.39 224.64">
<circle cx="38" cy="114" r="36"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="38" y="114" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">DISK</text>
<polygon points="182,114 170,118 170,110" style="fill:rgb(0,0,0)"/>
<path d="M74,114L176,114"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="128" y="102" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">character</text>
<text x="128" y="126" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">defns</text>
<path d="M182,150L290,150L290,78L182,78Z"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="236" y="104" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">CPU</text>
<text x="236" y="124" text-anchor="middle" fill="rgb(0,0,0)" dominant-baseline="central">(16-bit mini)</text>
<polygon points="236,78 231,66 240,66" style="fill:rgb(0,0,0)"/>
<path d="M236,72L236,6"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="236" y="42" text-anchor="end" fill="rgb(0,0,0)" dominant-baseline="central">input </text>
<text x="393" y="114" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">   CRT</text>
<path d="M393,125L393,103L465,103L537,67L537,161L465,125L393,125"  style="fill:none;stroke-width:2.16;stroke-linejoin:round;stroke:rgb(0,0,0);" />
<polygon points="393,114 382,118 382,110" style="fill:rgb(0,0,0)"/>
<path d="M290,114L388,114"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<polygon points="544,6 549,18 540,18" style="fill:rgb(0,0,0)"/>
<path d="M544,12L544,222"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="544" y="186" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central"> ...  paper</text>
<circle cx="537" cy="42" r="7.2"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<circle cx="552" cy="42" r="7.2"  style="fill:none;stroke-width:2.16;stroke:rgb(0,0,0);" />
<text x="559" y="42" text-anchor="start" fill="rgb(0,0,0)" dominant-baseline="central">   rollers</text>
</svg>
`);
        });

    });
});
