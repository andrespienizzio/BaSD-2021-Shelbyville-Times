// Subscription form validations

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
    if  (x !== password.value) {
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

var age = document.getElementById('age');
var ageError = document.getElementById('ageError');

age.addEventListener('blur', ageBlur);
function ageBlur() {    
    let x = age.value;
    if  (x < 17) {
        ageError.style.display = "block";
        ageError.style.display = "visible";
        invalid[4] = ageError.textContent;
    } else {
        valid[4] = "Age: " + x + '\n';
    }
}

age.addEventListener("focus", ageFocus);
function ageFocus() {
    ageError.style.display = "none";
}

// Phone Number

var phone = document.getElementById('phone');
var phoneError = document.getElementById('phoneError');

phone.addEventListener('blur', phoneBlur);
function phoneBlur() {    
    let x = phone.value;
    if  (x.length < 7 || x.includes('.') || x.includes('-')) {
        phoneError.style.display = "block";
        phoneError.style.display = "visible";
        invalid[5] = phoneError.textContent;
    } else {
        valid[5] = "Phone: " + x + '\n';
    }
}

phone.addEventListener("focus", phoneFocus);
function phoneFocus() {
    phoneError.style.display = "none";
}

// Address

var address = document.getElementById('address');
var addressError = document.getElementById('addressError');

address.addEventListener('blur', addressBlur);
function addressBlur() {    
    let x = address.value;
    if  (x.length < 6 || x.indexOf(' ') <= 1 || x.search(/\d/) < 0 || x.search(/[a-z]/) < 0) {
        addressError.style.display = "block";
        addressError.style.display = "visible";
        invalid[6] = addressError.textContent;
    } else {
        valid[6] = "Address: " + x + '\n';
    }
}

address.addEventListener("focus", addressFocus);
function addressFocus() {
    addressError.style.display = "none";
}

// City


// Postal Code


// ID Number


// Send Button


// BONUS


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




    


   













