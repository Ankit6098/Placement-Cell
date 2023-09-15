
const dashboard = document.querySelector('.dashboard-li');
const interview = document.querySelector('.interview-li');
const companies = document.querySelector('.companies-li');
const appliedJobs = document.querySelector('.appliedjobs-li'); 

const dashboardContainer = document.querySelector('.dashboard-container');
const interviewContainer = document.querySelector('.interviews-main-container');
const companiesContainer = document.querySelector('.companies-main-container');
const appliedJobsContainer = document.querySelector('.appliedJobs-main-container');

const dashboardInterviewsContainer = document.querySelector('.interviews-container');
const dashboardCompaniesContainer = document.querySelector('.companies-container');
const dashbaordAppliedContainer = document.querySelector('.applied-container');

const userMoreInfo = document.querySelector('.user-more-info-container');

dashboardInterviewsContainer.addEventListener('click', () => {
    interview.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    companies.style = "background-color: none";
    interviewContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    appliedJobsContainer.style = "display: none";
    applicationContainer.style = "display: none";
    application.style = "background-color: none";
});

dashboardCompaniesContainer.addEventListener('click', () => {
    companies.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    appliedJobsContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
    applicationContainer.style = "display: none";
});

dashbaordAppliedContainer.addEventListener('click', () => {
    appliedJobs.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    appliedJobsContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
});

dashboard.style = "background-color: #ebf2fd";

dashboard.addEventListener('click', () => {
    dashboard.style = "background-color: #ebf2fd";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    appliedJobs.style = "background-color: none";
    dashboardContainer.style = "display: flex";
    interviewContainer.style = "display: none";
    companiesContainer.style = "display: none";
    appliedJobsContainer.style = "display: none";
});

interview.addEventListener('click', () => {
    interview.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    companies.style = "background-color: none";
    appliedJobs.style = "background-color: none";
    interviewContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    companiesContainer.style = "display: none";
    appliedJobsContainer.style = "display: none";
});

companies.addEventListener('click', () => {
    companies.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    appliedJobs.style = "background-color: none";
    companiesContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
    appliedJobsContainer.style = "display: none";
});

appliedJobs.addEventListener('click', () => {
    appliedJobs.style = "background-color: #ebf2fd";
    dashboard.style = "background-color: none";
    interview.style = "background-color: none";
    companies.style = "background-color: none";
    appliedJobsContainer.style = "display: flex";
    dashboardContainer.style = "display: none";
    interviewContainer.style = "display: none";
    companiesContainer.style = "display: none";
});

// jobs

const activeJob = document.querySelectorAll(".active-jobs-container");
const jobMoreInfoContainer = document.querySelector(".job-more-info-container");

for (let i = 0; i < activeJob.length; i++) {
    activeJob[i].addEventListener('click', () => {
        const id = activeJob[i].getAttribute('data-id');
        jobMoreInfoContainer.style = "display: flex";
        fetch(`/dashboard/getJobs/${id}`)
            .then(res => res.json())
            .then(data => {
                renderJobs(data.data.jobs);
            })
            .catch(err => console.log(err));
    });
}

function renderJobs(jobs) {
    jobMoreInfoContainer.innerHTML = '';
    const studentId = jobMoreInfoContainer.getAttribute('student-id');
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
            <button class="company-more-info-details-apply-btn" job-id="${jobs._id}" onclick="applyJobs()">Apply</button>
        </div>
        
        <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
    `;
    jobMoreInfoContainer.appendChild(element);
    for (let i = 0; i < jobs.applicantList.length; i++) {
        if (jobs.applicantList[i] == studentId) {
            const applyJobsRequest = document.querySelector('.company-more-info-details-apply-btn');
            applyJobsRequest.disabled = true;
            applyJobsRequest.style = "cursor: not-allowed;";
            applyJobsRequest.innerHTML = "Applied";
        }
    }
}


// close container button

function closeContainerbtn() {
    jobMoreInfoContainer.innerHTML = "";
    jobMoreInfoContainer.style = "display: none";
    userMoreInfo.style = "display: none";
}


// apply job fetch request

function applyJobs() {
    const applyJobsRequest = document.querySelector('.company-more-info-details-apply-btn');
    applyJobsRequest.disabled = true;
    applyJobsRequest.style = "cursor: not-allowed;";
    applyJobsRequest.innerHTML = "Applied";
    const id = applyJobsRequest.getAttribute('job-id');
    fetch(`/dashboard/applyJobs/${id}`, {
        method: "POST"
    })
        .then(res => {
            console.log(res, "response");
            console.log(res.json(), "response json");
            res.json()})
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}

const hasDisplayedMessage = localStorage.getItem('hasDisplayedMessage');

if (!hasDisplayedMessage) {
    // The message has not been displayed yet, show the div
    setTimeout(() => {
        userMoreInfo.style.display = "flex";
    }, 8000)

    // Set a flag in local storage to indicate that the message has been displayed
    localStorage.setItem('hasDisplayedMessage', 'true');

    // Set a timeout to remove the flag from local storage after 1 day (86400 seconds)
    setTimeout(function () {
        localStorage.removeItem('hasDisplayedMessage');
    }, 86400 * 1000); // 86400 seconds in a day
}