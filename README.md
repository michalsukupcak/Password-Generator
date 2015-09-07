# Password Generator

*Generate secure passwords on the fly!*

> Live version: http://password-generator.webapp.sk/

Web application for quick and easy generation of secure passwords. Build with the Polymer framework.

## How does it work? 

Application takes a simple alias and a secret (only piece of information you need to remember) and generates powerful password for you on the fly. You can find more details about the idea and algorithm in the link above (click on the (i) icon in top-right corner), or directly in the [source code](https://github.com/michalsukupcak/Password-Generator/blob/master/elements/x-generator.html) (line 233).

Pseudo-algorithm for generating passwords:
> **String alias = ...;** // Get alias

> **String secret = ...;** // Get secret

> **String s = alias + secret;** // Simply join alias and secret into one string

> **String hash = hash('sha256',s);** // Generate hash of string s using SHA256 algorithm

> **String base = base64Encode(hash);** // Encode hash from previous step into base64 encoding

> **String password = base.substring(17,49);** // Take 32 characters from generated base64, starting with 18th character, all the way up to 48th

## Example:

First of all we need a strong secret: **"s3cr3t!"**

Now lets choose a service. Facebook.com is a good example. Alias for it could be: **"facebook"**

When we enter **"facebook"** as alias and **"s3cr3t!"** as secret into password generator, we get this as a generated password:
**"jZhMjJiZTc3YjBjZDI4NzZhMDgzMjg2N"**

Pretty good for a password, right? Now every time we enter combination of our alias and secret into the password generator, we get this phrase as our final password which we can use for Facebook.com.

Need another password? Lets take github.com as an example. Our alias could be "github". We already know the secret, no need to change that one. When we enter "github" as alias and "s3cr3t!" as secret, this is our new generated password:
"zUxMzlmMjg2NzU5NmEyYjIwMTBkYmM1N"

Pretty cool, huh? 2 very strong and completely different passwords and all we had to remember was our secret ("s3cr3t!").

And we can continue with additional services/aliases as we need. In the end we'll get strong and unique passwords for each service without all the hassle of remembering or writing down multiple password.

## NOTE
Password generation is done locally in your browser and no data leaves your computer. Extension doesn't observe your actions nor report anything anywhere.

## Chrome extension
Password Generator is also available as Chrome extension:
> https://chrome.google.com/webstore/detail/password-generator/khhhgiocpaeaepoedjkcmhhaaoibnncg
> https://github.com/michalsukupcak/Password-Generator-Chrome
