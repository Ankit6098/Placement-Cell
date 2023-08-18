console.log('admin dashboard  is connected!');

const dashboard = document.querySelector('.dashboard-li');
const student = document.querySelector('.student-li');
const interview = document.querySelector('.interview-li');
const companies = document.querySelector('.companies-li');
const application = document.querySelector('.application-li');

const dashboardContainer = document.querySelector('.dashboard-container');
const studentContainer = document.querySelector('.students-main-container');
const interviewContainer = document.querySelector('.interviews-main-container');
const jobsContainer = document.querySelector('.jobs-main-container');
const applicationContainer = document.querySelector('.application-main-container');

dashboard.style = "background-color: #ebf2fd";

dashboard.addEventListener('click', () => {
    dashboard.style = "background-color: #ebf2fd";
    student.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    dashboardContainer.style = "display: flex";
    studentContainer.style = "display: none";
    interviewContainer.style = "display: none";
    jobsContainer.style = "display: none";
    applicationContainer.style = "display: none";
    application.style = "background-color: none";
});

student.addEventListener('click', () => {
    student.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    studentContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
    jobsContainer.style = "display: none";
    applicationContainer.style = "display: none";
    application.style = "background-color: none";
});

interview.addEventListener('click', () => {
    interview.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    student.style = "background-color: none";
    companies.style = "background-color: none";
    interviewContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    studentContainer.style = "display: none";
    jobsContainer.style = "display: none";
    applicationContainer.style = "display: none";
    application.style = "background-color: none";
});

companies.addEventListener('click', () => {
    companies.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    student.style = "background-color: none";
    interview.style = "background-color: none";
    application.style = "background-color: none";
    jobsContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    studentContainer.style = "display: none";
    interviewContainer.style = "display: none";
    applicationContainer.style = "display: none";
});

application.addEventListener('click', () => {
    application.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    student.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    applicationContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    studentContainer.style = "display: none";
    interviewContainer.style = "display: none";
    jobsContainer.style = "display: none";
});


// fetch students

const studentMoreInfo = document.querySelector('.student-more-info-container');
const studentMoreInfoCloseBtn = document.querySelector('.student-more-info-close-btn');
const activeStudent = document.querySelectorAll('.students-inner-container');

for (let i = 0; i < activeStudent.length; i++) {
    activeStudent[i].addEventListener('click', () => {
    console.log("more info button clicked");
    const id = activeStudent[i].getAttribute('data-id');
    console.log(id);
    fetch(`/admin/getStudents/${id}`)
        .then(res => res.json())
        .then(data => {
            renderStudents(data.data.students);
        })
        .catch(err => console.log(err));
    studentMoreInfo.style = "display: block";
});
}

function renderStudents(students) {
    studentMoreInfo.innerHTML = '';
    if (students.avatar == "") {
        students.avatar = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
    } else {
        students.avatar = students.avatar;
    }
    const element = document.createElement('div');
    element.classList.add('student-more-info');
    element.innerHTML = `
        <div class="student-more-info">
            <img src="${students.avatar}" alt="student image" class="student-more-info-img">
            <div class="student-more-info-text">
                <h3 class="student-more-info-name">${students.name} ${students.lastname}</h3>
                <p class="student-more-info-email">${students.email}</p>
                <p class="student-more-info-phone">${students.phone}</p>
                <p class="student-more-info-city">${students.city}</p>
                <p class="student-more-info-country">${students.country}</p>
                <p> social media: </p>
                <p class="student-more-info-portfolio">${students.portfolio}</p>
                <p class="student-more-info-github">${students.github}</p>
                <p class="student-more-info-linkedin">${students.linkedin}</p>
                <p class="student-more-info-twitter">${students.twitter}</p>
                <p class="student-more-info-instagram">${students.instagram}</p>
                <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
            </div>
        </div>
    `;
    studentMoreInfo.appendChild(element);
}

// fetch jobs

const companyAddBtn = document.querySelector('.company-add-btn');
const companyAddForm = document.querySelector('.company-add-form');
const companyCloseBtn = document.querySelector('.company-close-btn');

companyAddBtn.addEventListener('click', () => {
    companyAddForm.style = "display: flex";
});

const activeJob = document.querySelectorAll('.active-jobs');
const companyMoreInfo = document.querySelector('.company-more-info-container');


for (let i = 0; i < activeJob.length; i++) {
    activeJob[i].addEventListener('click', () => {
    console.log("more info button clicked");
    const id = activeJob[i].getAttribute('data-id');
    console.log(id);
    fetch(`/admin/getCompanies/${id}`)
        .then(res => res.json())
        .then(data => {
            renderJobs(data.data.jobs);
        })
        .catch(err => console.log(err));
    companyMoreInfo.style = "display: block";
});
}

function renderJobs(jobs) {
    companyMoreInfo.innerHTML = '';
    if (jobs.image == "") {
        jobs.image = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
    } else {
        jobs.image = jobs.image;
    }

    const element = document.createElement('div');
    element.classList.add('company-more-info');
    element.innerHTML = `
        <div class="company-more-info-img">
            <img src="${jobs.image}" alt="company image">
        </div>
        <div class="company-more-info-details">
            <div class="company-more-info-details-name">
                <h3>${jobs.company}</h3>
            </div>
            <div class="company-more-info-details-email">
                <h4>${jobs.email}</h4>
            </div>
            <div class="company-more-info-details-website">
                <h4>${jobs.website}</h4>
            </div>
            <div class="company-more-info-details-title">
                <h4>${jobs.title}</h4>
            </div>
            <div class="company-more-info-details-location">
                <h4>${jobs.location}</h4>
            </div>
            <div class="company-more-info-details-salary">
                <p>Salary: ${jobs.salary}</p>
            </div>
            <div class="company-more-info-details-skills">
                <p>skills: ${jobs.skills}</p>
            </div>
            <div class="company-more-info-details-description">
                <p>${jobs.description}</p>
            </div>
            <button class="company-edit-button" data-id="${jobs._id}">Edit</button>
            <a href="admin/delete-job/${jobs._id}"><button class="company-delete-button" data-id="${jobs._id}">Delete</button></a>
            <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
        </div>
    `;
    companyMoreInfo.appendChild(element);
}

// interview

const interviewFormContainer = document.querySelector('.interview-form-container');

function closeContainerbtn() {
    studentMoreInfo.style = "display: none";
    companyMoreInfo.style = "display: none";
    interviewFormContainer.style = "display: none";
    companyAddForm.style = "display: none";
}

const acceptBtn = document.querySelectorAll('.accept-btn');
const rejectBtn = document.querySelectorAll('.reject-btn');
const activeAppliedContainer = document.querySelectorAll('.active-applied-container');

for (let i = 0; i < acceptBtn.length; i++) {
    acceptBtn[i].addEventListener('click', () => {
        activeAppliedContainer[i].classList.add('animate__animated', 'animate__bounceOut');
    });
}

for (let i = 0; i < rejectBtn.length; i++) {
    rejectBtn[i].addEventListener('click', () => {
        activeAppliedContainer[i].classList.add('animate__animated', 'animate__bounceOut');
    });
}

const pendingBtn = document.querySelector('.pending-btn');
const acceptedBtn = document.querySelector('.accepted-btn');

const displayApplicationContainerPending = document.querySelector('.display-application-container-pending');
const displayApplicationContainerAccepted = document.querySelector('.display-application-container-accepted');

pendingBtn.addEventListener('click', () => {
    console.log("pending button clicked");
    pendingBtn.style = "background-color: #ffcc00";
    acceptedBtn.style = "background-color: #44ac67";
    displayApplicationContainerPending.style = "display: flex";
    displayApplicationContainerAccepted.style = "display: none";
});

acceptedBtn.addEventListener('click', () => {
    console.log("accepted button clicked");
    pendingBtn.style = "background-color: #e4bc1c";
    acceptedBtn.style = "background-color: #36ca67";
    displayApplicationContainerAccepted.style = "display: flex";
    displayApplicationContainerPending.style = "display: none";
});

const assignBtn = document.querySelectorAll('.assign-btn');

for (let i = 0; i < assignBtn.length; i++) {
    assignBtn[i].addEventListener('click', () => {
        console.log("assign button clicked");
        interviewFormContainer.style = "display: flex";
    });
}

const editbtn = document.querySelectorAll('.edit-btn');

for (let i = 0; i < editbtn.length; i++) {
    editbtn[i].addEventListener('click', () => {
        console.log("edit button clicked");
        interviewFormContainer.style = "display: flex";
    });
}