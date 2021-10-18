
var valid = []
var invalid = []

// Full Name
 
var fullName = document.getElementById('fullName');
var fullNameError = document.getElementById('fullNameError');
fullName.addEventListener('blur', fullNameBlur);

function fullNameBlur() {    
    var x = fullName.value
    if (x.length < 7 || x.indexOf(' ') <= 0 || x.indexOf(' ') >= x.length) {        
        fullNameError.style.display = "block";
        fullNameError.style.display = "visible";
        invalid[0] = fullNameError.textContent;
        return false;
    } else {
        fullNameError.style.display = "0";
        valid[0] = "Full Name: " + x + '\n';
        return true;
    }
}
fullName.addEventListener("focus", fullNameFocus);
function fullNameFocus() {
    fullNameError.style.display = "none";
}

// Email


// Password


// Confirm Password


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




    


   













