const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
//     "/"];


const generatePassword = document.getElementById("generatePassword");
const passwords = document.getElementsByClassName(".password");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const passwordLenght = document.getElementById("passwordLenght");
const sliderOutput = document.getElementById("sliderOutput");
const checkBoxUppercase = document.getElementById("uppercase");
const checkBoxNumbers = document.getElementById("numbers");
const checkBoxSymbols = document.getElementById("symbols");
let passwordOne = [],
    passwordTwo = [],
    characters = letters,
    hasUppercase = false,
    hasNumber = false,
    hasSymbol = false;

// Listen to slider and updates value on DOM to generate passwords
sliderOutput.textContent = passwordLenght.value;
passwordLenght.oninput = function () {
    sliderOutput.textContent = this.value;
}

// Verify checkbox for uppercases, numbers and symbols
checkBoxUppercase.addEventListener("click", function () {
    if (checkBoxUppercase.checked == true) {
        hasUppercase = true;
        // characters = characters.concat(uppercases);
    } else {
        hasUppercase = false;
    }
});

checkBoxNumbers.addEventListener("click", function () {
    if (checkBoxNumbers.checked == true) {
        hasNumber = true;
        // characters = characters.concat(uppercases);
    } else {
        hasNumber = false;
    }
});

checkBoxSymbols.addEventListener("click", function () {
    if (checkBoxSymbols.checked == true) {
        hasSymbol = true;
        // characters = characters.concat(uppercases);
    } else {
        hasSymbol = false;
    }
});

// Listen to button click to generate passwords
generatePassword.addEventListener("click", function () {
    passwordOne = [];
    passwordTwo = [];
    characters = letters;

    console.log("Uppercase: " + hasUppercase, "Numbers: " + hasNumber, "Symbols: " + hasSymbol)

    if (hasUppercase == true) {
        characters = characters.concat(uppercases);
    }
     if (hasNumber == true) {
         characters = characters.concat(numbers);
     }
      if (hasSymbol == true) {
          characters = characters.concat(symbols);
      }
    console.log(characters.length);

    for (let i = 0; i < passwordLenght.value; i++) {
        passwordOne += characters[Math.floor(Math.random() * characters.length)]
        passwordTwo += characters[Math.floor(Math.random() * characters.length)]
    }
    password1.textContent = passwordOne;
    password2.textContent = passwordTwo;
    // Copy passwords
    password1.addEventListener("click", function () {
        navigator.clipboard.writeText(passwordOne);
        /* Alert the copied text */
        addClass(this, "show");
        setTimeout(() => {
            removeClass(this, "show")
        }, 1000)
    });;

    password2.addEventListener("click", function () {
        navigator.clipboard.writeText(passwordTwo)
        /* Alert the copied text */
        addClass(this, "show");
        setTimeout(() => {
            removeClass(this, "show")
        }, 1000)
    });;
});


//Hide copied alert
function removeClass(a, b) {
    a.classList.remove(b);
};

//Show copied alert
function addClass(a, b) {
    a.classList.add(b);
};