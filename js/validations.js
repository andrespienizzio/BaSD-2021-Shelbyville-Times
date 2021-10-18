// Subscription form validations

// Arrays

var valid = [];
var invalid = [];

// Full Name
 
var fullName = document.getElementById('fullName');
var fullNameError = document.getElementById('fullNameError');

fullName.onfocus = 
    function () {
        fullNameError.style.display = 'none';
    }
    
fullName.onblur = 
    function fullNameBlur() {    
        var x = fullName.value;
        if (x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') == x.length -1) {        
            fullNameError.style.display = 'block';
            fullNameError.style.display = 'visible';
            invalid[0] = fullNameError.textContent;
            valid[0] = 'error'; 
        } else {
            valid[0] = 'Full Name: ' + x + '\n';
        }
    } 


// Email

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

email.addEventListener('blur', emailBlur);
function emailBlur() {    
    var x = email.value;
    if (x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') || x.indexOf('.') == email.length - 1){        
        emailError.style.display = 'block';
        emailError.style.display = 'visible';
        invalid[1] = emailError.textContent;
        valid[1] = 'error'; 
    } else {
        valid[1] = 'Email: ' + x + '\n';
    }
}

email.addEventListener('focus', emailFocus);
function emailFocus() {
    emailError.style.display = 'none';
}

// Password

var password = document.getElementById('password');
var passwordError = document.getElementById('passwordError');

password.addEventListener('blur', passwordBlur);
function passwordBlur() {    
    var x = password.value;
    if  (x.length < 8 || x.search(/\w/) < 0 || x.search(/\d/) < 0) {
        passwordError.style.display = 'block';
        passwordError.style.display = 'visible';
        invalid[2] = passwordError.textContent;
        valid[2] = 'error'; 
    } else {
        valid[2] = 'Password: ' + x + '\n';
    }
}

password.addEventListener('focus', passwordFocus);
function passwordFocus() {
    passwordError.style.display = 'none';
}

// Confirm Password

var confirmPassword = document.getElementById('confirmPassword');
var confirmPasswordError = document.getElementById('confirmPasswordError');

confirmPassword.addEventListener('blur', confirmPasswordBlur);
function confirmPasswordBlur() {    
    var x = confirmPassword.value;
    if  (x !== password.value) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.style.display = 'visible';
        invalid[3] = confirmPasswordError.textContent;
        valid[3] = 'error'; 
    } else {
        valid[3] = 'Confirm Password: ' + x + '\n';
    }
}

confirmPassword.addEventListener('focus', confirmPasswordFocus);
function confirmPasswordFocus() {
    confirmPasswordError.style.display = 'none';
}

// Age

var age = document.getElementById('age');
var ageError = document.getElementById('ageError');

age.addEventListener('blur', ageBlur);
function ageBlur() {    
    var x = age.value;
    if  (x < 17) {
        ageError.style.display = 'block';
        ageError.style.display = 'visible';
        invalid[4] = ageError.textContent;
        valid[4] = 'error'; 
    } else {
        valid[4] = 'Age: ' + x + '\n';
    }
}

age.addEventListener('focus', ageFocus);
function ageFocus() {
    ageError.style.display = 'none';
}

// Phone Number

var phone = document.getElementById('phone');
var phoneError = document.getElementById('phoneError');

phone.addEventListener('blur', phoneBlur);
function phoneBlur() {    
    var x = phone.value;
    if  (x.length < 7 || x.includes('.') || x.includes('-')) {
        phoneError.style.display = 'block';
        phoneError.style.display = 'visible';
        invalid[5] = phoneError.textContent;
        valid[5] = 'error'; 
    } else {
        valid[5] = 'Phone: ' + x + '\n';
    }
}

phone.addEventListener('focus', phoneFocus);
function phoneFocus() {
    phoneError.style.display = 'none';
}

// Address

var address = document.getElementById('address');
var addressError = document.getElementById('addressError');

address.addEventListener('blur', addressBlur);
function addressBlur() {    
    var x = address.value;
    if  (x.length < 6 || x.indexOf(' ') <= 1 || x.search(/\d/) < 0 || x.search(/[a-z]/) < 0) {
        addressError.style.display = 'block';
        addressError.style.display = 'visible';
        invalid[6] = addressError.textContent;
        valid[6] = 'error'; 
    } else {
        valid[6] = 'Address: ' + x + '\n';
    }
}

address.addEventListener('focus', addressFocus);
function addressFocus() {
    addressError.style.display = 'none';
}

// City

var city = document.getElementById('city');
var cityError = document.getElementById('cityError');

city.addEventListener('blur', cityBlur);
function cityBlur() {    
    var x = city.value;
    if  (x.length < 3) {
        cityError.style.display = 'block';
        cityError.style.display = 'visible';
        invalid[7] = cityError.textContent;
        valid[7] = 'error'; 
    } else {
        valid[7] = 'City: ' + x + '\n';
    }
}

city.addEventListener('focus', cityFocus);
function cityFocus() {
    cityError.style.display = 'none';
}

// Postal Code

var postalCode = document.getElementById('postalCode');
var postalCodeError = document.getElementById('postalCodeError');

postalCode.addEventListener('blur', postalCodeBlur);
function postalCodeBlur() {    
    var x = postalCode.value;
    if  (x.length < 3) {
        postalCodeError.style.display = 'block';
        postalCodeError.style.display = 'visible';
        invalid[8] = postalCodeError.textContent;
        valid[8] = 'error'; 
    } else {
        valid[8] = 'Postal Code: ' + x + '\n';
    }
}

postalCode.addEventListener('focus', postalCodeFocus);
function postalCodeFocus() {
    postalCodeError.style.display = 'none';
}

// ID Number

var idNumber = document.getElementById('idNumber');
var idNumberError = document.getElementById('idNumberError');

idNumber.addEventListener('blur', idNumberBlur);
function idNumberBlur() {    
    var x = idNumber.value;
    if  (x.length < 7 || x.length > 8 || x.includes('.') || x.includes('-')) {
        idNumberError.style.display = 'block';
        idNumberError.style.display = 'visible';
        invalid[9] = idNumberError.textContent;
        valid[9] = 'error'; 
    } else {
        valid[9] = 'Id Number: ' + x + '\n';
    }
}

idNumber.addEventListener('focus', idNumberFocus);
function idNumberFocus() {
    idNumberError.style.display = 'none';
}

// Submit form button

var form = document.getElementById('form')

form.addEventListener('submit', formSend);

function formSend() {
    if (valid.includes('error')) {
        alert(invalid.join(' '));
    } else if (valid.length == 0) {
        alert('You have to complete the form before send!');
    } else {
        alert('The form was sent successfully!');
        alert(valid.join(' '));
    }
}


// BONUS


    /*

    var bonus = document.getElementsByTagName('fullName');

    function runEvent() {
        console.log
    }




    var itemInput = document.querySelector('input[type='text']');

    itemInput.addEventListener('keydown', runEvent);


    function runEvent(e) {
        console.log('evnet'+e.type);
        console.log(e.target.value);


    } */


// Validation model

/* function fullNameBlur() {    
    var x = fullName.value;
    if (x.length < 6) {
        formErrors.classList.display('errorMessage');
    } else if (x.indexOf(' ') <= 0) {
        formErrors.fullName = 'Please insert your full name';
    } else {
        formErrors.fullName = null;
    }
    if (formErrors.fullName){
        fullNameError.classList.re= 'block';
        fullNameError.style.display = 'visible';
        fullNameError.innerHTML = formErrors.fullName;
    } else {
        fullNameFocus()
    }
} */




    

