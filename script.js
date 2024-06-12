let Generate = document.getElementById('generateBtn')
let CheckBoxNum = document.getElementById('numbers')
let CheckBoxSpecial = document.getElementById('special')
let CheckBoxLower = document.getElementById('lowerCase')
let CheckBoxUpper = document.getElementById('upperCase')
let Password = document.getElementById('passwordText')
let CopyButton = document.getElementById('Copy')
var range = document.getElementById('passwordSize');
var value = document.getElementById('passwordSizeLabel');


lowerChecker = false;
upperChecker = false;
numChecker = false;
specialChecker = false;

var rangesize;

range.addEventListener('input', function() {
    value.textContent = this.value;
    rangesize = this.value
});

function checkLowerhandler(){
    if(CheckBoxLower.checked === true){
        lowerChecker = true;
    }else{
        lowerChecker = false;
    }
}
function checkUpperhandler(){
    if(CheckBoxUpper.checked === true){
        upperChecker = true;
    }else{
        upperChecker = false;
    }
}
function checkNumhandler(){
    if(CheckBoxNum.checked === true){
        numChecker = true;
    }else{
        numChecker = false;
    }
}
function checkSpecialhandler(){
    if(CheckBoxSpecial.checked === true){
        specChecker = true;
    }else{
        specChecker = false;
    }
}

function generatePassword(){
    checkLowerhandler()
    checkUpperhandler()
    checkNumhandler()
    checkSpecialhandler()

    const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChar = '0123456789'; 
    const specialChar = '!-_?()/&%';

    let selectedChars = '';
    let pass = ''

    selectedChars += lowerChecker ? lowerChar : '';
    selectedChars += upperChecker ? upperChar : '';
    selectedChars += numChecker ? numChar : '';
    selectedChars += specChecker ? specialChar : '';

    for(let i = 0; i < rangesize; i++){
        const randomIndex = Math.floor(Math.random() * selectedChars.length);
        pass += selectedChars[randomIndex];
    }
    Password.innerHTML = pass;

    CopyButton.onclick = function(){
        navigator.clipboard.writeText(pass);
        alert("Copied the password: " + pass);
    }
    
}

Generate.onclick = function(){
    generatePassword();
}



