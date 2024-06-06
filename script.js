let Generate = document.getElementById('generateBtn')
let CheckBoxNum = document.getElementById('numbers')
let CheckBoxSpecial = document.getElementById('special')
let CheckBoxLower = document.getElementById('lowerCase')
let CheckBoxUpper = document.getElementById('upperCase')
let Password = document.getElementById('passwordText')
var range = document.getElementById('passwordSize');
var value = document.getElementById('passwordSizeLabel');

var pass = '';
special = "!?@#$-_";
specialChecker = 0;
number = "0123456789";
numberChecker = 0;
upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
upperChecker = 0;
lower = 'abcdefghijklmnopqrstuvwxyz';
lowerChecker = 0;


range.addEventListener('input', function() {
    value.textContent = this.value;
});

function checkBoxLowerHandler(){
    if(CheckBoxLower.checked === true){
        lowerChecker = 1;
        console.log(lowerChecker)
    }else{
        lowerChecker = 0;
        console.log(lowerChecker)
    }
}
function checkBoxUpperHandler(){
    if(CheckBoxUpper.checked === true){
        upperChecker = 1;
        console.log(upperChecker)
    }else{
        upperChecker = 0;
        console.log(upperChecker)
    }
}
function checkBoxNumHandler(){
    if(CheckBoxNum.checked === true){
        numberChecker = 1;
        console.log(numberChecker)
    }else{
        numberChecker = 0;
        console.log(numberChecker)
    }
}
function checkBoxSpecialHandler(){
    if(CheckBoxSpecial.checked === true){
        specialChecker = 1;
        console.log(specialChecker)
    }else{
        specialChecker = 0;
        console.log(specialChecker)
    }
}
function generateRandomPassword(){
    checkBoxNumHandler()
    checkBoxSpecialHandler()
    checkBoxUpperHandler()
    checkBoxLowerHandler()
    
    if(numberChecker + specialChecker + upperChecker + lowerChecker === 0 ){
        alert('Select a filter option');
    
    }else if(numberChecker === 1){

    }else if(specialChecker === 1){

    }else if(upperChecker === 1){

    }else if(lowerChecker === 1){

    }


}


Generate.onclick = function(){
    generateRandomPassword()     
}
