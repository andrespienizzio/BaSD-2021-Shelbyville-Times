// Subscription form validations

// Arrays

var valid = [];
var invalid = [];
var emptyFormError = 0;

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
            emptyFormError += 1;
        }
    } 

// Email

var email = document.getElementById('email');
var emailError = document.getElementById('emailError');

email.onfocus = 
    function emailFocus() {
        emailError.style.display = 'none';
    }

email.onblur = 
    function emailBlur() {    
        var x = email.value;
        if (x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.includes(' ') || x.indexOf('.') == email.length - 1){        
            emailError.style.display = 'block';
            emailError.style.display = 'visible';
            invalid[1] = emailError.textContent;
            valid[1] = 'error'; 
        } else {
            valid[1] = 'Email: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Password

var password = document.getElementById('password');
var passwordError = document.getElementById('passwordError');

password.onfocus = 
    function passwordFocus() {
        passwordError.style.display = 'none';
    }

password.onblur = 
    function passwordBlur() {    
        var x = password.value;
        if  (x.length < 8 || x.search(/\w/) < 0 || x.search(/\d/) < 0) {
            passwordError.style.display = 'block';
            passwordError.style.display = 'visible';
            invalid[2] = passwordError.textContent;
            valid[2] = 'error'; 
        } else {
            valid[2] = 'Password: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Confirm Password

var confirmPassword = document.getElementById('confirmPassword');
var confirmPasswordError = document.getElementById('confirmPasswordError');

confirmPassword.onfocus = 
    function confirmPasswordFocus() {
        confirmPasswordError.style.display = 'none';
    }

confirmPassword.onblur = 
    function confirmPasswordBlur() {    
        var x = confirmPassword.value;
        if  (x !== password.value) {
            confirmPasswordError.style.display = 'block';
            confirmPasswordError.style.display = 'visible';
            invalid[3] = confirmPasswordError.textContent;
            valid[3] = 'error'; 
        } else {
            valid[3] = 'Confirm Password: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Age

var age = document.getElementById('age');
var ageError = document.getElementById('ageError');

age.onfocus = 
    function ageFocus() {
        ageError.style.display = 'none';
    }

age.onblur = 
    function ageBlur() {    
        var x = age.value;
        if  (x < 17) {
            ageError.style.display = 'block';
            ageError.style.display = 'visible';
            invalid[4] = ageError.textContent;
            valid[4] = 'error'; 
        } else {
            valid[4] = 'Age: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Phone Number

var phone = document.getElementById('phone');
var phoneError = document.getElementById('phoneError');

phone.onfocus = 
    function phoneFocus() {
        phoneError.style.display = 'none';
    }

phone.onblur = 
    function phoneBlur() {    
        var x = phone.value;
        if  (x.length < 7 || x.includes('.') || x.includes('-')) {
            phoneError.style.display = 'block';
            phoneError.style.display = 'visible';
            invalid[5] = phoneError.textContent;
            valid[5] = 'error'; 
        } else {
            valid[5] = 'Phone: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Address

var address = document.getElementById('address');
var addressError = document.getElementById('addressError');

address.onfocus = 
    function addressFocus() {
        addressError.style.display = 'none';
    }

address.onblur = 
    function addressBlur() {    
        var x = address.value;
        if  (x.length < 6 || x.indexOf(' ') <= 1 || x.search(/\d/) < 0 || x.search(/[a-z]/) < 0) {
            addressError.style.display = 'block';
            addressError.style.display = 'visible';
            invalid[6] = addressError.textContent;
            valid[6] = 'error'; 
        } else {
            valid[6] = 'Address: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// City

var city = document.getElementById('city');
var cityError = document.getElementById('cityError');

city.onfocus = 
    function cityFocus() {
        cityError.style.display = 'none';
    }

city.onblur = 
    function cityBlur() {    
        var x = city.value;
        if  (x.length < 3) {
            cityError.style.display = 'block';
            cityError.style.display = 'visible';
            invalid[7] = cityError.textContent;
            valid[7] = 'error'; 
        } else {
            valid[7] = 'City: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Postal Code

var postalCode = document.getElementById('postalCode');
var postalCodeError = document.getElementById('postalCodeError');

postalCode.onfocus = 
    function postalCodeFocus() {
        postalCodeError.style.display = 'none';
    }

postalCode.onblur = 
    function postalCodeBlur() {    
    var x = postalCode.value;
        if  (x.length < 3) {
            postalCodeError.style.display = 'block';
            postalCodeError.style.display = 'visible';
            invalid[8] = postalCodeError.textContent;
            valid[8] = 'error'; 
        } else {
            valid[8] = 'Postal Code: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// ID Number

var idNumber = document.getElementById('idNumber');
var idNumberError = document.getElementById('idNumberError');

idNumber.onfocus = 
    function idNumberFocus() {
        idNumberError.style.display = 'none';
    }

idNumber.onblur = 
    function idNumberBlur() {    
    var x = idNumber.value;
        if  (x.length < 7 || x.length > 8 || x.includes('.') || x.includes('-')) {
            idNumberError.style.display = 'block';
            idNumberError.style.display = 'visible';
            invalid[9] = idNumberError.textContent;
            valid[9] = 'error'; 
        } else {
            valid[9] = 'Id Number: ' + x + '\n';
            emptyFormError += 1;
        }
    }

// Submit form button

/* var form = document.getElementById('form');

form.addEventListener('submit', formSend);

function formSend() {
    if (valid.includes('error')) {
        alert(invalid.join(' '));
    } else if (emptyFormError < 10) {
        alert('You have to complete the form before send!'); 
    } else {
        alert('The form was sent successfully!');
        alert(valid.join(' '));
    }
} */

// BONUS

var bonus = document.getElementById('bonusName');
fullName.addEventListener('focus', bonusName);
fullName.addEventListener('keydown', bonusName);
fullName.addEventListener('keyup', bonusName);
function bonusName(fullName) {
    bonus.innerHTML = 'Hello ' + fullName.target.value + '!';
}

        // --------- Week 6 --------- // 

// Submit validations

var form = document.getElementById('form');
form.addEventListener('submit', formSend);

function formSend() {
    var url = 'https://curso-dev-2021.herokuapp.com/newsletter?name='+fullName.value+'&email='+email.value+'&password='+password.value
    +'&age='+age.value+'&phoneNumber='+phone.value+'&address='+address.value+'&city='
    +city.value+'&postalCode='+postalCode.value+'&id='+idNumber.value;
    var modalMessages = document.getElementById('modalMessages'); // I think this is unnecesary
    var modalTitle = document.getElementById('modalTitle'); // I think this is unnecesary
    if (emptyFormError == 0) {
        modalTitle.innerHTML = 'You have to complete the form before send!';
        modalContainer.style.display = 'flex';
        modalContainer.style.backgroundColor = '#434344';
    } else if (valid.includes('error')) {
        modalTitle.innerHTML = 'ERROR!';
        modalMessages.innerHTML = '<li>' + invalid.join('</li><li>') + '</li>'; // fix the problem with the blank spaces
        modalContainer.style.display = 'flex';
        modalContainer.style.backgroundColor = '#FF0000';
    } else {
        fetch(url)
        .then(function (response){
			return response.json();
        })
        .then(function(data) {
            if(fullName.value !== '' && email.value !== '' && password.value !== '' 
            && age.value !== '' && phone.value !== '' && address.value !== '' && city.value !== '' 
            && postalCode.value !== '' && idNumber.value !== '') {
                modalTitle.innerHTML = 'The form was sent successfully!';
                modalMessages.innerHTML = valid.join(' '); // fix the problem with the blank spaces
                modalContainer.style.display = 'flex';
                saveLocalStorage();
                console.log(data);
            } else {
                modalTitle.innerHTML = 'You have to complete the form send!';
                modalContainer.style.display = 'flex';
                modalContainer.style.backgroundColor = '#434344';
            }  
        })
        .catch(function(err) {
            modalContainer.style.display = 'flex';
            modalMessages.innerHTML = err;
        }) 
    }
}

// Stop automatic reload after send

function stopReload(){
    return false;
 }

// Close modal

var modalButton = document.getElementById('modalButton');
var closeModal = document.getElementById('modalContainer');

modalButton.onclick = function() {
    closeModal.style.display = 'none';
}

// Save to local storage/

var saveLocalStorage = function () {
    localStorage.setItem('name', fullName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirm password', confirmPassword.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('postal code', postalCode.value);
    localStorage.setItem('id number', idNumber.value);
}; 

// Get Local Storage

function getLocalStorage() {
    fullName.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : null;
    email.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : null;
    password.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : null;
    confirmPassword.value = !!localStorage.getItem('confirm password') ? localStorage.getItem('confirm password') : null;
    age.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : null;
    phone.value = !!localStorage.getItem('phone') ? localStorage.getItem('phone') : null;
    address.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : null;
    city.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : null;
    postalCode.value = !!localStorage.getItem('postal code') ? localStorage.getItem('postal code') : null;
    idNumber.value = !!localStorage.getItem('id number') ? localStorage.getItem('id number') : null;
};

window.onload = getLocalStorage(); 
