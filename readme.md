# Flay
Flay the diacritics and accents off special characters with [_Flay_](https://www.npmjs.com/package/flay). Say goodbye to character matching conflicts for good.

<img src="https://user-images.githubusercontent.com/45696445/164787538-576b9268-78a0-4b21-8e72-fb088aeeaf2e.gif">

_________________________
## API
### flay(`string`)
```js
var flay = require('flay');
```
&nbsp;
_________________________
#### -- Example 1 --
```js
console.log(flay('I’m searching my email for the word “résumé” but the search function doesn’t use Flay so it’s not appearing.'));
```
> Output will be:
```
I’m searching my email for the word “resume” but the search function doesn’t use Flay so it’s not appearing.
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 2 --
```js
console.log(flay('Don’t be naïve. Searching a word with a diaeresis won’t work without Flay.'));
```
> Output will be:
```
Don’t be naive. Searching a word with a diaeresis won’t work without Flay.
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 3 --
```js
console.log(flay('Piñatas should have candy not jalapeños!'));
```
> Output will be:
```
Pinatas should have candy not jalapenos!
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 4 --
```js
console.log(flay('I’ve been on my laptop searching “soufflé” \nI’ve either lost the recipe or I’m not running Flay'));
```
> Output will be:
```
I’ve been on my laptop searching “souffle”
I’ve either lost the recipe or I’m not running Flay
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 5 --
```js
console.log(flay('Franjo Tuđman was born in Veliko Trgovišće and became Croatia’s first president.'));
```
> Output will be:
```
Franjo Tudman was born in Veliko Trgovisce and became Croatia’s first president.
```
_________________________
&nbsp;
## Notes
[_Flay_](https://www.npmjs.com/package/flay) flays the diacritics and accents off your strings. Flatten all special characters with [_Flay_](https://www.npmjs.com/package/flay) and rest assured that you'll have no matching conflicts should a special character wind up in your text. [_Flay_](https://www.npmjs.com/package/flay) features attention to ISO 192-383 and a whole lot more. Currently supporting: Afrikaans, Albanian, Azerbaijani, Basque, Bosnian, Catalan, Cebuano, Corsican, Croatian, Czech, Danish, Dutch, Eastern Frisian, \*English, Esperanto, Estonian, Filipino, Finnish, French, Gaelic, Galician, German, Haitian Creole, Hausa, Hawaiian, \*Hmong Thoob Teb, Hungarian, Icelandic, Igbo, Italian, Javanese, \*Kinyarwanda, Kurdish, Latvian, Lithuanian, Luxembourgish, Maltese, Maori, North Frisian, Northern Sotho, Norwegian, Polish, Portuguese, Romanian, \*Samoan, Scottish Gaelic, \*Shona, Slovak, Slovenian, \*Somali, Southern Sotho, Spanish, Sundanese, \*Swahili, Swedish, Tagalog, Turkish, Turkmen, Vietnamese, \*Welsh, Western Frisian, Xhosa, Yoruba, \*Zulu

\*No regular diacritical marks

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install flay
```

## License
(MIT)

Copyright (c) 2022 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
