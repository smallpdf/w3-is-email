<h1 align="center">

</h1>

# @smallpdf/is-email

> Email address validation using the regex from the specs for an [InputHTMLElement](href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email).

This package provide a single function to test a value against the <a href="https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type%3Demail)">specifications</a> of the an email InputHTMLElement.

## Installation

```
$ npm install @smallpdf/is-email
```

## Usage

```js
const isEmail = require('@smallpdf/is-email');
console.log(isEmail('test@example.org')); // true
```

## License

[ISC License](LICENSE)
