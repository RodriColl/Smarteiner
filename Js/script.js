function validatePhone(input) {
    const value = input.value;
    const pattern = /^[0-9]*$/;
    if (!pattern.test(value)) {
        input.setCustomValidity('Por favor, ingresa solo números.');
    } else {
        input.setCustomValidity('');
    }
}

