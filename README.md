## Project Title
Shift cipher
## Description
This was completed as part of the Codecademy Front-End Engineer path. The Instructions were as follows:

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()


## How to use
To try out this code, copy the .js file then run by typing "npm [filename]" in the terminal.

## Licence
Please see license document.

