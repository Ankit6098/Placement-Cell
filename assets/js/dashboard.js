console.log('dashboard.js is connected!');

const dashboard = document.querySelector('.dashboard-li');
const interview = document.querySelector('.interview-li');
const companies = document.querySelector('.companies-li');

const dashboardContainer = document.querySelector('.dashboard-container');
const interviewContainer = document.querySelector('.interviews-main-container');
const companiesContainer = document.querySelector('.companies-main-container');

dashboard.style = "background-color: #ebf2fd";

dashboard.addEventListener('click', () => {
    dashboard.style = "background-color: #ebf2fd";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    dashboardContainer.style = "display: flex";
    interviewContainer.style = "display: none";
    companiesContainer.style = "display: none";
});

interview.addEventListener('click', () => {
    interview.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    companies.style = "background-color: none";
    interviewContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    companiesContainer.style = "display: none";
});

companies.addEventListener('click', () => {
    companies.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    companiesContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
});