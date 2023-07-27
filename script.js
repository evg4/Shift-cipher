class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }
  encrypt(string) {
    string = string.toUpperCase();
    let newString = [];
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) < 91 && string.charCodeAt(i) > 64) {
        if (string.charCodeAt(i) + this._shift > 90) {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) + this._shift - 26)
          );
        } else if (string.charCodeAt(i) + this._shift < 65) {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) + this._shift + 26)
          );
        } else {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) + this._shift)
          );
        }
      } else {
        newString.push(String.fromCharCode(string.charCodeAt(i)));
      }
    }
    newString = newString.join("");
    return newString;
  }

  decrypt(string) {
    string = string.toLowerCase();
    let newString = [];
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) < 123 && string.charCodeAt(i) > 96) {
        if (string.charCodeAt(i) - this._shift > 122) {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) - this._shift - 26)
          );
        } else if (string.charCodeAt(i) - this._shift < 97) {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) - this._shift + 26)
          );
        } else {
          newString.push(
            String.fromCharCode(string.charCodeAt(i) - this._shift)
          );
        }
      } else {
        newString.push(String.fromCharCode(string.charCodeAt(i)));
      }
    }
    newString = newString.join("");
    return newString;
  }
}

const cipher = new ShiftCipher(2);
console.log("1: " + cipher.encrypt("Aa to Zz I <3 to code!")); // should return 'CC VQ BB <3 VQ EQFG!'
console.log("2: " + cipher.decrypt("CC VQ BB K <3 VQ EQFG!"));

console.log("3: " + cipher.decrypt("K <3 OA RWRRA")); // should return 'i <3 my puppy'

console.log("4: " + cipher.encrypt("I <3 my puppy"));

console.log("5: " + cipher.decrypt("<3 bB aA yY zZ"));

console.log("6: " + cipher.encrypt("<3 bB aA yY zZ"));
