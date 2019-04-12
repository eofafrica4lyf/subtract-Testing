function subtract(firstNumber, secondNumber){
    if((typeof(firstNumber) === 'number' || typeof(secondNumber) === 'number' )&&( !isNaN(firstNumber) || !isNaN(secondNumber) ) && ( !(firstNumber === Infinity) || !(secondNumber === Infinity) ) ){
        return firstNumber - secondNumber;
    }
    return 'klsddnsdfd';
}

module.exports = subtract;