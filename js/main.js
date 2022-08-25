
// hello1();
// hello2();
// // Declaration
// function hello1() {
//     let a = arguments[0];
// }

// // Expression
// // var hello2 = function () { }

// let age = 31;
// func1()
// func1()
// func1()


// // Pure function
// function func2(yosh) {
//     return yosh + 6
// }

// // Impure 
// function func1() {
//     age += 6;
//     console.log("Your age:", age)
//     let firstname = "Alice";
//     return firstname
// }
// let a = 13;
// func1();
// console.log(a);

// function func1() {
//     // let a;
//     a = 30;
//     // console.log(a);  
// }

var myFormEl = document.querySelector(".myform");

var nameEl = document.querySelector(".myform__name");
var nameValidFeedEl = document.querySelector(".myform__name ~ .valid-feedback")
var nameInvalidFeedEl = document.querySelector(".myform__name ~ .invalid-feedback")

var ageEl = document.querySelector(".myform__age");
var ageValidFeedEl = document.querySelector(".myform__age ~ .valid-feedback")
var ageInvalidFeedEl = document.querySelector(".myform__age ~ .invalid-feedback")


var emailEl = document.querySelector(".myform__email");
var emailValidFeedEl = document.querySelector(".myform__email ~ .valid-feedback")
var emailInvalidFeedEl = document.querySelector(".myform__email ~ .invalid-feedback")


var myFormTitleEl = document.querySelector(".myform__title")

var modalEl = document.querySelector(".mymodal");

modalEl.addEventListener('click', (event) => {
    if (event.target.classList.contains("mymodal"))
        modalClose()
})
function modalOpen() {
    modalEl.classList.add("mymodal--open");
}

function modalClose() {
    modalEl.classList.remove("mymodal--open");
}


/**
 * object => email, age, firstname
 */
var validateForm = function (obj) {
    let isValid = {
        email: false,
        age: false
    };
    if (isValid.age = validateAge(obj.age)) {

        ageEl.classList.remove("is-invalid");
        ageEl.classList.add("is-valid");
    } else {
        ageEl.classList.add("is-invalid");
        ageEl.classList.remove("is-valid");
    }

    if (isValid.email = validateEmail(obj.email)) {
        emailEl.classList.remove("is-invalid");
        emailEl.classList.add("is-valid");
    } else {
        emailEl.classList.add("is-invalid");
        emailEl.classList.remove("is-valid");
    }
    return isValid.age && isValid.email
}



myFormEl.addEventListener('submit', function (event) {
    event.preventDefault()

    const data = {
        firstname: nameEl.value,
        age: ageEl.value,
        email: emailEl.value
    }

    if (validateForm(data)) {
        console.log("Ma'lumot jo'natish uchun tayyor")
        myFormTitleEl.style.backgroundColor = "green";
        myFormTitleEl.style.color = "white";
        modalOpen()

    } else {
        console.error("Ma'lumot berilgan shartlarga to'g'ri kelmadi")
        myFormTitleEl.style.backgroundColor = "red";
        myFormTitleEl.style.color = "white";
    }
})



// var age = 34;

// var siblingAge = 45;

// var result = age < siblingAge ? "Sening akang bor" : "Sening ukang bor";
// console.log(result)

// if (age < siblingAge) {
//     console.log("Sening akang bor")
// } else {
//     console.log("Sening ukang bor")
// }

// var a = 12;
// var b = 34;

// var max = a > b ? a : b;
// console.log(max)mymodal