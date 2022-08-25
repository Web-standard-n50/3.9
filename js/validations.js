/* Return true or false */
function validateEmail(email) {
    let regex = /^[0-9A-Za-z]{3,}\@[0-9A-Za-z]{3,10}\.[A-Za-z0-9]{1,4}$/
    return regex.test(email);
}

function validateAge(age) {
    return age <= 34 && age >= 16
}
