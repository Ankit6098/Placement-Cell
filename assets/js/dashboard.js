console.log('dashboard.js is connected!');

const dashboard = document.querySelector('.dashboard-li');
const interview = document.querySelector('.interview-li');
const companies = document.querySelector('.companies-li');
const appliedJobs = document.querySelector('.appliedjobs-li'); 

const dashboardContainer = document.querySelector('.dashboard-container');
const interviewContainer = document.querySelector('.interviews-main-container');
const companiesContainer = document.querySelector('.companies-main-container');
const appliedJobsContainer = document.querySelector('.appliedJobs-main-container');

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
        console.log("more info button clicked");
        const id = activeJob[i].getAttribute('job-id');
        fetch(`/dashboard/getJobs/${id}`)
            .then(res => res.json())
            .then(data => {
                renderJobs(data.data.jobs);
            })
            .catch(err => console.log(err));
        jobMoreInfoContainer.style = "display: flex";
    });
}

function renderJobs(jobs) {
    jobMoreInfoContainer.innerHTML = '';
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
            <button class="company-more-info-details-apply-btn" job-id="${jobs._id}" onclick="applyJobs()">Apply</button>
            <i onclick="closeContainerbtn()" class="fa-solid fa-xmark container-close-btn"></i>
        </div>
    `;
    jobMoreInfoContainer.appendChild(element);
}

// apply jobs

// close container button

function closeContainerbtn() {
    jobMoreInfoContainer.style = "display: none";
}


// apply job fetch request

function applyJobs() {
    const applyJobsRequest = document.querySelector(".company-more-info-details-apply-btn");
    console.log("apply job button clicked");
    const id = applyJobsRequest.getAttribute('job-id');
    fetch(`/dashboard/applyJobs/${id}`, {
        method: "POST"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
}


// ajax request for applied jobs

const applyJobsRequest = document.querySelector(".company-more-info-details-apply-btn");

for (let i = 0; i < applyJobsRequest.length; i++) {
    let newApplyJobsRequest = applyJobsRequest[i]; // Use applyJobsRequest[i] to get the current element

    newApplyJobsRequest.submit(function (e) { // Use addEventListener to attach the submit event
        e.preventDefault();
        // Assuming you want to extract the job ID from some attribute of the element, for example:
        const jobId = newApplyJobsRequest.getAttribute("data-job-id"); // Replace "data-job-id" with the actual attribute name
        $.ajax({
            type: "GET",
            url: `/dashboard/applyJobs/${jobId}`, // Use template literals to insert the jobId
            success: function (response) {
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
}

