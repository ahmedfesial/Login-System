// Sign Up
var nameInput = document.getElementById('signUpName');
var emailInput = document.getElementById('signUpEmail');
var passInput = document.getElementById('signUpPassword');
var emailExist = document.getElementById('emailExist');
var btnSignUp = document.getElementById('btnSignUp')
var users = [];

if (localStorage.getItem('users') != null) {
    users = JSON.parse(localStorage.getItem('users'));
}


function signUp() {

    //Create Validation
    if (nameInput.value == '' | emailInput == '' | passInput == '') {

        emailExist.innerHTML = ` <div class="alert alert-danger" role="alert">
        All Fields are required!
        </div>`
    }
    else {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == emailInput.value) {
                emailExist.innerHTML += ` <div class="alert alert-danger" role="alert">
                Email Already Exist!
                </div>`;
                return false;
            }
        }
        getData();
        emailExist.innerHTML = `<div class="alert alert-success" role="alert">
        User Added Successfully
        </div>`
    }
}

function getData() {

    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passInput.value,
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.open('./index.html' , '_self');
    location.href = './index.html';
}



btnSignUp?.addEventListener('click', signUp);


// =================================================

// Sign In

var signInEmail = document.getElementById('signInEmail');
var signInPassword = document.getElementById('signInPassword');
var btnLogin = document.getElementById('btnLogin');
var checkInput = document.getElementById('checkInput');

function signIn() {
    if (signInEmail.value == '' || signInPassword.value == '') {
        checkInput.innerHTML = ` <div class="alert alert-danger" role="alert">
        All Fields are required!
        </div>`;
    }
    else {

        for (var i = 0; i < users.length; i++) {
            if (users[i].email == signInEmail.value && users[i].password == signInPassword.value) {
                checkInput.innerHTML =
                    ` <div div class="alert alert-danger" role = "alert" >
                   Login Sucssfully
                </div > `
                localStorage.setItem('newUser', JSON.stringify(users[i].name))
                window.open('./login.html ', '_self ');
                return;
            }
        }
        checkInput.innerHTML = ` <div div class="alert alert-danger" role = "alert" >
        Invalid Email or Password   
        </div > `
    }
}


btnLogin?.addEventListener('click', signIn);


// Home Page

var userName = document.getElementById('userName');
var getName = localStorage.getItem('newUser');

userName.innerHTML = ` <h2 class="my-3">Welcome ${getName}</h2>`












