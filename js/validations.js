const valid = []
const invalid = []

// Full Name
 
var fullName = document.getElementById('fullName');
var fullNameError = document.getElementById('fullNameError');

fullName.addEventListener('blur', fullNameBlur);
function fullNameBlur() {    
    let x = fullName.value;
    if (x.length < 6 || x.indexOf(' ') <= 1) {        
        fullNameError.style.display = "block";
        fullNameError.style.display = "visible";
        invalid[0] = fullNameError.textContent;
    } else {
        valid[0] = "Full Name: " + x + '\n';
    }
}

fullName.addEventListener("focus", fullNameFocus);
function fullNameFocus() {
    fullNameError.style.display = "none";
}

// Email

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

email.addEventListener('blur', emailBlur);
function emailBlur() {    
    let x = email.value;
    if (x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') || x.indexOf('.') == email.length - 1){        
        emailError.style.display = "block";
        emailError.style.display = "visible";
        invalid[1] = emailError.textContent;
    } else {
        valid[1] = "Email: " + x + '\n';
    }
}

email.addEventListener("focus", emailFocus);
function emailFocus() {
    emailError.style.display = "none";
}

// Password

var password = document.getElementById('password');
var passwordError = document.getElementById('passwordError');

password.addEventListener('blur', passwordBlur);
function passwordBlur() {    
    let x = password.value;
    if  (x.length < 8 || x.search(/\w/) < 0 || x.search(/\d/) < 0) {
        passwordError.style.display = "block";
        passwordError.style.display = "visible";
        invalid[2] = passwordError.textContent;
    } else {
        valid[2] = "Password: " + x + '\n';
    }
}

password.addEventListener("focus", passwordFocus);
function passwordFocus() {
    passwordError.style.display = "none";
}

// Confirm Password

var confirmPassword = document.getElementById('confirmPassword');
var confirmPasswordError = document.getElementById('confirmPasswordError');

confirmPassword.addEventListener('blur', confirmPasswordBlur);
function confirmPasswordBlur() {    
    let x = confirmPassword.value;
    if  (x !== password.value || x.length == 0) {
        confirmPasswordError.style.display = "block";
        confirmPasswordError.style.display = "visible";
        invalid[3] = confirmPasswordError.textContent;
    } else {
        valid[3] = "Confirm Password: " + x + '\n';
    }
}

confirmPassword.addEventListener("focus", confirmPasswordFocus);
function confirmPasswordFocus() {
    confirmPasswordError.style.display = "none";
}

// Age


// Phone Number


// Address


// City


// Postal Code


// ID Number


// Send Button


// BONUS

    
    console.log('hola');

    /*

    var bonus = document.getElementsByTagName('fullName');

    function runEvent() {
        console.log
    }




    var itemInput = document.querySelector('input[type="text"]');

    itemInput.addEventListener('keydown', runEvent);


    function runEvent(e) {
        console.log('evnet'+e.type);
        console.log(e.target.value);


    } */




    


   













