console.log('script loaded');

const toggleSignUpPage = document.querySelector('.toggle-sign-up-page');
const toggleSignInPage = document.querySelector('.toggle-sign-in-page');

const signUpPage = document.querySelector('.sign-up-container');
const signInPage = document.querySelector('.sign-in-container');

toggleSignUpPage.addEventListener('click', () => {
    console.log('toggleSignUpPage clicked');
    signUpPage.classList.add('active');
    signInPage.classList.remove('active');
    }
);

toggleSignInPage.addEventListener('click', () => {
    console.log('toggleSignInPage clicked');
    signInPage.classList.add('active');
    signUpPage.classList.remove('active');
    }
);