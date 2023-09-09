console.log('script loaded');

const toggleSignUpPage = document.querySelector('.toggle-sign-up-page');
const toggleSignInPage = document.querySelector('.toggle-sign-in-page');

const signUpPage = document.querySelector('.sign-up-container');
const signInPage = document.querySelector('.sign-in-container');
const adminLogin = document.querySelector('.admin-login-container');

const userAdminOption = document.querySelector('.user-admin-option');
const userOption = document.querySelector('.user-option-button');
const adminOption = document.querySelector('.admin-option-button');

const user = document.querySelector('.user');
const admin = document.querySelector('.admin');
const toggleAdmin = document.querySelector(".toggle-admin");
const toggleUser = document.querySelector('.toggle-user');

toggleUser.addEventListener('click', () => {
    console.log("user click");
    user.classList.remove('animate__bounceIn');
    user.classList.add('animate__flipInY');
    admin.classList.remove('animate__bounceIn');
    admin.classList.add('animate__flipInY');
    admin.style.display ='none';
    user.style.display ="flex";
})

toggleAdmin.addEventListener('click', () => {
    console.log("admin click");
    user.classList.remove('animate__bounceIn');
    user.classList.add('animate__flipInY');
    admin.classList.remove('animate__bounceIn');
    admin.classList.add('animate__flipInY');
    admin.style.display ="flex";
    user.style.display ='none';

})

userOption.addEventListener('click', () => {
    console.log('userOption clicked');
    signInPage.classList.add('active');
    userAdminOption.style.display = 'none';
});

adminOption.addEventListener('click', () => {
    console.log('adminOption clicked');
    adminLogin.style.display = 'flex';
    admin.style.display = 'none';
});

toggleSignUpPage.addEventListener('click', () => {
    console.log('toggleSignUpPage clicked');
    // signUpPage.classList.add('animate__animated');
    // signUpPage.classList.add('animate__fadeInRight');
    signUpPage.classList.add('active');
    signInPage.classList.remove('active');
    }
);

toggleSignInPage.addEventListener('click', () => {
    console.log('toggleSignInPage clicked');
    // signInPage.classList.add('animate__animated');
    // signInPage.classList.add('animate__fadeInLeft');
    signInPage.classList.add('active');
    signUpPage.classList.remove('active');
    }
);

const showPassword = document.querySelector('.show-password');

showPassword.addEventListener('click', () => {
    if (showPassword.classList.contains('fa-eye')) {
        console.log('icon fa-eye clicked');
        showPassword.classList.remove('fa-eye');
        showPassword.classList.add('fa-eye-slash');
    } else {
        console.log('icon fa-eye-slash clicked');
        showPassword.classList.remove('fa-eye-slash');
        showPassword.classList.add('fa-eye');
    }
    
    const password = document.querySelector('.password');
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
    }
);

const showConfirmPassword = document.querySelector('.show-confirm-password');

showConfirmPassword.addEventListener('click', () => {
    if (showConfirmPassword.classList.contains('fa-eye')) {
        console.log('icon fa-eye clicked');
        showConfirmPassword.classList.remove('fa-eye');
        showConfirmPassword.classList.add('fa-eye-slash');
    } else {
        console.log('icon fa-eye-slash clicked');
        showConfirmPassword.classList.remove('fa-eye-slash');
        showConfirmPassword.classList.add('fa-eye');
    }
    
    const confirmPassword = document.querySelector('.confirm-password');
    if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text';
    } else {
        confirmPassword.type = 'password';
    }
    }
);


