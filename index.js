//**Random Password Generator**
const passwordLength = document.getElementById("passwordLength");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol")
const submitBtn = document.getElementById("submitBtn");
const generatedPassword = document.getElementById("generatedPassword");

function generatePassword(passwordLength, lowerCase, upperCase, number, symbol) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "1234567890"
    const symbols = "!@#$%&"

    let allowedChars = "";
    let password = "";

    console.log(passwordLength.value);
    if (passwordLength.value < 0) {
        console.error("Please specify a valid password length")
    }
    if (!lowerCase.checked && !upperCase.checked && !number.checked && !symbol.checked) {
        console.error("Select the characters the password should contain!")
    }

    if (lowerCase.checked) {
        allowedChars += lowerCase ? lowerCaseChars : "";
    }
    if (upperCase.checked) {
        allowedChars += upperCase ? upperCaseChars : "";
    }
    if (number.checked) {
        allowedChars += number ? numbers : "";
    }
    if (symbol.checked) {
        allowedChars += symbol ? symbols : "";
    }

    console.log(allowedChars);
    for (let i = 0; i < passwordLength.value; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
    }

    console.log("Password", password);
    if (lowerCase.checked || upperCase.checked || number.checked || symbol.checked) {
        generatedPassword.textContent = `Generated password : ${password}`;
    }
    else if(passwordLength.value == "" || passwordLength.value == "0"){
        generatedPassword.textContent = `Please select a valid password length!`
    }
    return password;

}
const password = generatePassword(passwordLength.value, lowerCase, upperCase, number, symbol);
