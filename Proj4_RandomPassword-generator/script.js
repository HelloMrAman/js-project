const passwordBox = document.getElementById("password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!@#$%^&*()_+=-{}[]\|/?;:"

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
} 

function copyPassword() {
    const passwordBox = document.getElementById("password");

    // Modern approach using Clipboard API
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordBox.value).then(() => {
            console.log("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    } else {
        // Fallback for older browsers
        passwordBox.select();
        try {
            document.execCommand("copy");
            console.log("Fallback: Password copied to clipboard!");
        } catch (err) {
            console.error("Fallback: Unable to copy password", err);
        }
    }
}
