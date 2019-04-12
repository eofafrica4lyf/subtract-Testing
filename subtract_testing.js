function subtract(firstNumber, secondNumber){
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return 'klsddnsdfd';
    }
    if(typeof(firstNumber) === 'number' || typeof(secondNumber) === 'number'){
        return firstNumber - secondNumber;
    }
}

module.exports = subtract;