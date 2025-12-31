



const themeBtn=document.getElementById('theme');
const body=document.body;

if(localStorage.getItem('theme')==='dark') {
body.classList.toggle('dark-mode');}



themeBtn.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){

        localStorage.setItem('theme','dark');

    }
else{
    localStorage.setItem('theme','light');


}
});


function validateRegisterForm() {

    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();

    const usernameError = document.getElementById('text-error').value.trim();
    const emailError = document.getElementById('email-error').value.trim();
    const passwordError = document.getElementById('password-error').value.trim();

    let isValid = true;

    usernameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";


    if (username === "") {
        usernameError.innerText = "يا حجي وين الاسم؟ مطلوب!";
        isValid = false;
    }


    if (email === "") {
        emailError.innerText = "البريد الإلكتروني مطلوب!";
        isValid = false;
    }

    if (password === "") {
        passwordError.innerText = "لازم تحط كلمة سر!";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerText = "كلمة السر لازم تكون 8 أحرف عالأقل";
        isValid = false;
    }

    return isValid ;          
}


function validateLoginForm() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('loginEmailError');
    const passwordError = document.getElementById('loginPasswordError');

    let isValid = true;

    emailError.innerText = "";
    passwordError.innerText = "";

    if (email === "") {
        emailError.innerText = "دخل إيميلك يا غالي";
        isValid = false;
    }
    if (password === "") {
        passwordError.innerText = "نسيت كلمة السر!";
        isValid = false;
    }

    return isValid;
}