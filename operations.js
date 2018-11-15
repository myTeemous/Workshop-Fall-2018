function insert(val){
    document.form.userInput.value = document.form.userInput.value + val;
}

function clear(){
    document.form.userInput.value = "";
}

function backSpace(){
    let expression = document.form.userInput.value;

    document.form.userInput.value = expression.substring(0, expression.length()-1);
}

