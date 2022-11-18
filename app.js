const passwordElem = document.querySelector('.password');
const button = document.getElementById('btn-generate');
const length = document.getElementById('password-length-number');
const small = document.getElementById('lowercase');
const capital = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const copy = document.getElementById('copy');


button.addEventListener('click', updateUI);
function updateUI(){
    const passwordLength = length.value;
    const includeLowercase = small.checked;
    const includeUppercase = capital.checked;
    const includeNumbers = numbers.checked;
    const includeSymbols = symbols.checked;
    password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    passwordElem.innerText = password;
    copy.classList.remove("fa", "fa-check");
    copy.classList.add("fa-copy", "fa-regular");
}

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(password)
    copy.classList.remove("fa-copy", "fa-regular");
    copy.classList.add("fa", "fa-check");
})

function generatePassword(len, isLC, isUC, isNum, isSym){
    let charCodes = [];
    if(isLC)
        charCodes = LOWERCASE_CHAR_CODES;
    if(isUC)
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(isNum)
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if(isSym)
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
        
    const finalPassword = [];
    for(let i = 0; i < len; i++){
        const randomCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        finalPassword.push(String.fromCharCode(randomCode));
    }

    if(charCodes.length === 0) 
        return `Select at least one option`;
    
    return finalPassword.join('');   
}

function arrayLowToHigh(low, high){
    let array = [];
    for(let i = low; i <= high; i++){
        array.push(i);
    }
    return array;
}

const LOWERCASE_CHAR_CODES = arrayLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayLowToHigh(65, 90);
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126));  