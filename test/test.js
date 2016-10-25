var assert = require('assert');
var isEmail = require('../')

describe('w3-is-email', function() {

  var validEmails = [
    'test@example.org',
    'test+test@example.org',
    'test-test@example.org',
    'test@example',
    'test@sub.example.org',
    'test@example-org.com'
  ];

  var invalidEmails = [
    'not-mail',
    'example.org',
    'with space@example.org'
  ];

  describe('valid emails', function() {
    validEmails.forEach(function(email) {
      it('should be valid: ' + email, function() {
        assert(isEmail(email));
      });
    })
  });

  describe('invalid emails', function() {
    invalidEmails.forEach(function(email) {
      it('should be invalid: ' + email, function() {
        assert(!isEmail(email));
      });
    })
  });
});
