# w3-is-email

Email address validation using the regex from the w3 specs for html input field (type="email")


```JS

/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

```

https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type%3Demail)


## Usage

```JS

var isEmail = require('w3-is-email');
isEmail('test@example.org'); // true

```
