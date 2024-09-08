// script.js
alert("Welcome to Internship.com")
document.addEventListener('DOMContentLoaded', function() {
    const jobListings = document.getElementById('job-listings');
    
    const jobs = [
        { title: 'Software Engineer', company: 'Tech Corp', location: 'Remote' },
        { title: 'Data Analyst', company: 'Data Inc', location: 'New York' },
        { title: 'Project Manager', company: 'Business Solutions', location: 'San Francisco' }
    ];

    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.innerHTML = `<h3>${job.title}</h3><p>${job.company} - ${job.location}</p>`;
        jobListings.appendChild(jobElement);
    });
});
