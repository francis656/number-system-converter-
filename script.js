function convert() {
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    const inputNumber = document.getElementById('inputNumber').value;

    if (inputNumber === '') {
        document.getElementById('outputNumber').value = '';
        return;
    }

    const decimalNumber = parseInt(inputNumber, inputType);
    if (isNaN(decimalNumber)) {
        document.getElementById('outputNumber').value = 'Invalid Input';
        return;
    }

    const outputNumber = decimalNumber.toString(outputType).toUpperCase();
    document.getElementById('outputNumber').value = outputNumber;
}
