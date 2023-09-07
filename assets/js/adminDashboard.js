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
const interviewFormContainer = document.querySelector('.interview-form-container');
const applicationInterviewFormContainer = document.querySelector('.application-interview-form-container');
const studentMoreInfo = document.querySelector('.student-more-info-container');
const studentMoreInfoCloseBtn = document.querySelector('.student-more-info-close-btn');
const activeStudent = document.querySelectorAll('.students-inner-container');
const companyAddBtn = document.querySelector('.company-add-btn');
const companyAddFormContainer = document.querySelector('.company-add-form');
const companyCloseBtn = document.querySelector('.company-close-btn');
const activeJob = document.querySelectorAll('.active-jobs');
const companyMoreInfo = document.querySelector('.company-more-info-container');
const acceptBtn = document.querySelectorAll('.accept-btn');
const rejectBtn = document.querySelectorAll('.reject-btn');
const activeAppliedContainer = document.querySelectorAll('.active-applied-container');
const rejectedBtn = document.querySelector('.rejected-btn');
const pendingBtn = document.querySelector('.pending-btn');
const acceptedBtn = document.querySelector('.accepted-btn');
const displayApplicationContainer = document.querySelector('.display-application-container-rejected');
const displayApplicationContainerPending = document.querySelector('.display-application-container-pending');
const displayApplicationContainerAccepted = document.querySelector('.display-application-container-accepted');
const applicationAssignBtn = document.querySelectorAll('.application-assign-btn');
const editbtn = document.querySelectorAll('.edit-btn');
const interviewFrom = document.querySelector('#interview-form');
const addCompanyForm = document.querySelector('#company-form');
const activeJobsContainer = document.querySelector('.active-jobs-container');

const dashboardStudentsContainer = document.querySelector('.students-container');
const dashboardInterviewsContainer = document.querySelector('.interviews-container');
const dashboardCompaniesContainer = document.querySelector('.companies-container');
const dashbaordAppliedContainer = document.querySelector('.applied-container');

const nofound = document.querySelector('#no-found');

var assignInterviewUserId;

dashboardStudentsContainer.addEventListener('click', () => {
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

dashboardInterviewsContainer.addEventListener('click', () => {
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

dashboardCompaniesContainer.addEventListener('click', () => {
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

dashbaordAppliedContainer.addEventListener('click', () => {
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

// dashboard side navbar
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


// fetch students more info
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
            </div>
            <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
        </div>
    `;
    studentMoreInfo.appendChild(element);
}


// fetch jobs more info
companyAddBtn.addEventListener('click', () => {
    companyAddFormContainer.style = "display: flex";
});

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
    companyMoreInfo.style = "display: flex";
});
}

function renderJobs(jobs) {
    companyMoreInfo.innerHTML = '';
    if (jobs.companyImage == "") {
        jobs.companyImage = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
    } else {
        jobs.companyImage = jobs.companyImage;
    }

    const element = document.createElement('div');
    element.classList.add('company-more-info');
    element.innerHTML = `
        <div className="company-more-info-upper-container" style="display:flex; gap:1rem">
            <div class="company-more-info-img">
                <img src="${jobs.companyImage}" alt="company image">
            </div>
            <div class="company-more-info-text">
                <p><span class="company-more-info-name">${jobs.companyName} -</span><span class="company-more-info-location"> ${jobs.companylocation}</span></p>
                <p class="company-more-info-job-title">${jobs.jobTitle}</p>
                <p class="company-more-info-skills">${jobs.skills}</p>
                <p class="company-more-info-salary">${jobs.salary}</p>
                <p class="company-more-info-expreince">${jobs.experience} Experience</p>
            </div>
        </div>
        <div class="company-more-info-middle-container">
            <div className="div">
                <h5 style="margin-bottom: 5px">About Company</h5>
                <p class="company-more-info-company-description">${jobs.companyDescription}</p>
            </div>
            <div className="div">
                <h5 style="margin-bottom: 5px"> About Job</h5>
                <p class="company-more-info-job-description">${jobs.jobDescription}</p>
            </div>
            <button class="company-delete-button" data-id="${jobs._id}" onclick="deleteCompany()">Delete</button>
        </div>
        <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
    `;
    companyMoreInfo.appendChild(element);
}

// interview
function closeContainerbtn() {
    studentMoreInfo.style = "display: none";
    companyMoreInfo.style = "display: none";
    // interviewFormContainer.style = "display: none";
    companyAddFormContainer.style = "display: none";
    interviewFormContainer.style = "display: none";
}

// accept notification button
for (let i = 0; i < acceptBtn.length; i++) {
    acceptBtn[i].addEventListener('click', () => {
        const id = acceptBtn[i].getAttribute('interview-id');
        // activeAppliedContainer[i].classList.add('animate__animated', 'animate__bounceOut');
        const parent = acceptBtn[i].parentElement.parentElement;
        parent.classList.add('animate__animated', 'animate__bounceOut');
        setTimeout(() => {
            parent.remove();
        }, 1000);
        fetch(`admin/accept-apllied-jobs-notification/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    });
}

// reject notification button
for (let i = 0; i < rejectBtn.length; i++) {
    rejectBtn[i].addEventListener('click', () => {
        // activeAppliedContainer[i].classList.add('animate__animated', 'animate__bounceOut');
        const parent = rejectBtn[i].parentElement.parentElement;
        parent.classList.add('animate__animated', 'animate__bounceOut');
        setTimeout(() => {
            parent.remove();
        }, 1000);
        fetch(`admin/reject-apllied-jobs-notification/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
    });
}

// display all applicant application
rejectedBtn.addEventListener('click', () => {
    console.log("all button clicked");
    rejectedBtn.style = "background-color: #e0e7fd";
    pendingBtn.style = "background-color: #ebf2fd";
    acceptedBtn.style = "background-color: #ebf2fd";
    displayApplicationContainer.style = "display: flex";
    displayApplicationContainerPending.style = "display: none";
    displayApplicationContainerAccepted.style = "display: none";
});

// display pending aplicant application
pendingBtn.addEventListener('click', () => {
    console.log("pending button clicked");
    pendingBtn.style = "background-color: #e0e7fd";
    rejectedBtn.style = "background-color: #ebf2fd";
    acceptedBtn.style = "background-color: #ebf2fd";
    displayApplicationContainerPending.style = "display: flex";
    displayApplicationContainerAccepted.style = "display: none";
    displayApplicationContainer.style = "display: none";
});

// display accepted aplicant application
acceptedBtn.addEventListener('click', () => {
    console.log("accepted button clicked");
    acceptedBtn.style = "background-color: #e0e7fd";
    rejectedBtn.style = "background-color: #ebf2fd";
    pendingBtn.style = "background-color: #ebf2fd";
    displayApplicationContainerAccepted.style = "display: flex";
    displayApplicationContainerPending.style = "display: none";
    displayApplicationContainer.style = "display: none";
});

// assign interview button
for (let i = 0; i < applicationAssignBtn.length; i++) {
    applicationAssignBtn[i].addEventListener('click', () => {
        console.log("assign button clicked");
        interviewFormContainer.style = "display: flex";
        assignInterviewUserId = applicationAssignBtn[i].getAttribute('interview-id');
        interviewFrom.action = `/admin/assign-interview/${assignInterviewUserId}`;
        interviewFrom.setAttribute('interview-id', assignInterviewUserId);
    });
}

// edit interview form button
for (let i = 0; i < editbtn.length; i++) {
    editbtn[i].addEventListener('click', () => {
        console.log("edit button clicked");
        interviewFormContainer.style = "display: flex";
        assignInterviewUserId = editbtn[i].getAttribute('interview-id');
        interviewFrom.action = `/admin/assign-interview/${assignInterviewUserId}`;
        interviewFrom.setAttribute('interview-id', assignInterviewUserId);
    });
}

// ajax request to delete company
const activeJobs = document.querySelector('.active-jobs');

function deleteCompany() {
    const deleteBtn = document.querySelector('.company-delete-button');
    console.log("delete button clicked");
    const id = deleteBtn.getAttribute('data-id');
    $.ajax({
        type: 'GET',
        url: `/admin/delete-job/${id}`,
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        }
    });
    companyMoreInfo.style = "display: none";
    for (let i = 0; i < activeJob.length; i++) {
        let jobId = activeJob[i].getAttribute('data-id');
        if (jobId == id) {
            activeJob[i].remove();
            console.log("Company div removed");
            break;
        } else {
            console.log("Company div not found");
        }
    }
    if (activeJobsContainer.children.length == 0) {
        nofound.style = "display: flex";
    } else {
        nofound.style = "display: none";
    }
}

// ajax request for assign interview form

function interviewForm() {
    // if (interviewFormContainer.style.display == "flex") {
        interviewFrom.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("interview form submitted");
            const id = interviewFrom.getAttribute('interview-id');
            const data = $(interviewFrom).serialize();
            console.log(id);
            $.ajax({
                type: 'POST',
                url: `/admin/assign-interview/${id}`,
                data: data,
                success: function(data) {
                    console.log(data);
                },
                error: function(err) {
                    console.log(err);
                }
            });
            interviewFormContainer.style = "display: none";
        });
    // }
}
interviewForm()

// ajax request to add company
function addCompany() {
    // if (companyAddFormContainer.style.display == "false") {
        addCompanyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log("add company form submitted");
            const data = $(addCompanyForm).serialize();
            $.ajax({
                type: 'POST',
                url: '/admin/create-jobs',
                data: data,
                success: function(data) {
                    const element = document.createElement('div');
                    element.classList.add('active-jobs');
                    element.setAttribute('data-id', data.data.job._id);
                    if (data.data.job.companyImage == "") {
                        data.data.job.companyImage = "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg";
                    } else {
                        data.data.job.companyImage = data.data.job.companyImage;
                    }
                    element.innerHTML = `
                        <img src="${data.data.job.companyImage}" alt="">
                        <div class="job-details">
                        <p><span class="company-more-info-name">${data.data.job.companyName} -</span><span class="company-more-info-location"> ${data.data.job.companylocation}</span></p>
                            <p>${data.data.job.jobTitle}</p>
                            <p>${data.data.job.salary}</p>
                        </div>
                    `;
                    activeJobsContainer.append(element);
                },
                error: function(err) {
                    console.log(err);
                }
            });
            companyAddFormContainer.style = "display: none";
            addCompanyForm.reset();
            nofound.style = "display: none";
        });
    // }
}
addCompany();

if (activeJobsContainer.children.length == 0) {
    nofound.style = "display: flex";
} else {
    nofound.style = "display: none";
}