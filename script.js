let Generate = document.getElementById('generateBtn')
let CheckBoxNum = document.getElementById('numbers')
let CheckBoxSpecial = document.getElementById('special')
let CheckBoxLower = document.getElementById('upperCase')
let CheckBoxUpper = document.getElementById('lowerCase')
let Password = document.getElementById('passwordText')


function getRandomNum(max){
    return Math.floor(Math.random() * max);
}

function checkBoxSpecial(){
    if(CheckBoxSpecial.checked === true){
        console.log('checked')
    }else{
        console.log('false')
    }
}

function checkBoxNumHandler(){
    if(CheckBoxNum.checked === true){
        console.log(getRandomNum(10));
    }else{
        console.log('none')
    }
}

function generateRandomPassword(){
    Password.innerHTML = 'ziririr';
}


Generate.onclick = function(){
    checkBoxSpecial()
    generateRandomPassword()     
    checkBoxNumHandler()
}
