console.log('dashboard.js is connected!');

const dashboard = document.querySelector('.dashboard-li');
const student = document.querySelector('.student-li');
const interview = document.querySelector('.interview-li');
const companies = document.querySelector('.companies-li');

dashboard.style = "background-color: #ebf2fd";

dashboard.addEventListener('click', () => {
    dashboard.style = "background-color: #ebf2fd";
    student.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
});

student.addEventListener('click', () => {
    student.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
});

interview.addEventListener('click', () => {
    interview.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    student.style = "background-color: none";
    companies.style = "background-color: none";
});

companies.addEventListener('click', () => {
    companies.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    student.style = "background-color: none";
    interview.style = "background-color: none";
});