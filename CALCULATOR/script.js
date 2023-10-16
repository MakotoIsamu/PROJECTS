
let currentDisplay = ' '
document.querySelector('#input_value').value = currentDisplay ;


function clickButton(value){
    currentDisplay+=value
    document.querySelector('#input_value').value = currentDisplay
}

function result(){
    currentDisplay = eval(currentDisplay)
    document.querySelector('#input_value').value = currentDisplay
}

function reset(){
    currentDisplay = ''
    document.querySelector('#input_value').value = currentDisplay
}

