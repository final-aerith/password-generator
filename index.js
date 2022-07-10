const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

const generatePassword = document.getElementById("generatePassword");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordLenght = document.getElementById("passwordLenght");
const sliderOutput = document.getElementById("sliderOutput");
let passwordOne = [],
    passwordTwo = [];

// Listen to slider and updates value on DOM to generate passwords

sliderOutput.textContent = passwordLenght.value;
passwordLenght.oninput = function () {
    sliderOutput.textContent = this.value;
}


// Listen to button click to generate passwords
generatePassword.addEventListener("click", function () {
    console.log(passwordLenght.value)
    for (let i = 0; i < passwordLenght.value; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    password1.textContent = passwordOne;
    password2.textContent = passwordTwo;
    passwordOne = [];
    passwordTwo = [];
}) 