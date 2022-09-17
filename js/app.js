const displayPassword = document.getElementById('display-password');
const lengthInput = document.getElementById('length-number');
const lengthRange = document.getElementById('length-range');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

lengthInput.addEventListener('input', function (e) {
    lengthRange.value = e.target.value;
});
lengthRange.addEventListener('input', function (e) {
    lengthInput.value = e.target.value;
});

lengthInput.addEventListener('input', function (e) {
    generatePassword();
})

lengthRange.addEventListener('input', function (e) {
    generatePassword();
})

upperCase.addEventListener('input', function (e) {
    generatePassword();
})
lowerCase.addEventListener('input', function (e) {
    generatePassword();
})
numbers.addEventListener('input', function (e) {
    generatePassword();
})
symbols.addEventListener('input', function (e) {
    generatePassword();
})
const alphabatesLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabatesUppercase = alphabatesLowercase.map(letter => letter.toUpperCase());
const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '@', '/']

const generatePassword = () => {
    let passwordArray = [];
    if (upperCase.checked) {
        passwordArray = [...alphabatesUppercase];
    }
    if (lowerCase.checked) {
        passwordArray = [...passwordArray, ...alphabatesLowercase];
    }
    if (numbers.checked) {
        passwordArray = [...passwordArray, ...numbersArray];
    }
    if (symbols.checked) {
        passwordArray = [...passwordArray, ...symbolsArray];
    }
    const passLength = lengthInput.value;
    if (passLength) {
        let finalPassArray = [];
        for (var i = 1; i <= passLength; i++) {
            let indexNum = Math.floor(Math.random() * passwordArray.length)
            finalPassArray.push(passwordArray[indexNum]);
            // console.log(indexNum, typeof(indexNum));
        }
        console.log(passLength);
        console.log(finalPassArray);
        const stringPassword = finalPassArray.join("");
        displayPassword.value = stringPassword;
        console.log(stringPassword);
    }
}
generatePassword();