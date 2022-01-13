const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let convertToMorse = '';

    let result = '';

    for (let i = 0; i <= expr.length-1; i = i + 10){

        let letter = expr.slice(i,i+10);

        convertToMorse = '';

        for(let k = letter.length; k >= 0; k=k-2){

            let syllable = letter.slice(k-2, k);

            if(syllable === "10"){
                convertToMorse = "."+convertToMorse;
            }else if(syllable === "11"){
                convertToMorse = "-"+convertToMorse;
            }
        }

        MORSE_TABLE[convertToMorse] ? result = result + MORSE_TABLE[convertToMorse] : result = result + " ";
    }
    return result;
}

// console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010")); //result = "hello world";

module.exports = {
    decode
}