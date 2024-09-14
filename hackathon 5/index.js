"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("resumeForm");
    const output = document.getElementById("resume-output");
    const personalInfoOutput = document.getElementById("personal-info-output");
    const educationOutput = document.getElementById("education-output");
    const workExperienceOutput = document.getElementById("work-experience-output");
    const skillsOutput = document.getElementById("skills-output");
    const shareUrl = document.getElementById("share-url");

    document.getElementById("generateResume").addEventListener("click", () => {
        // Get input values
        const username = document.getElementById("username").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("mail").value;
        const phone = document.getElementById("number").value;
        const fieldOfStudy = document.getElementById("Field").value;
        const school = document.getElementById("school").value;
        const workplace = document.getElementById("workplace").value;
        const skills = document.getElementById("skills").value;

        // Display the generated resume
        personalInfoOutput.innerHTML = `
            <h3>Personal Information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Field of Study: ${fieldOfStudy}</p>
        `;
        educationOutput.innerHTML = `
            <h3>Education</h3>
            <p>School: ${school}</p>
        `;
        workExperienceOutput.innerHTML = `
            <h3>Work Experience</h3>
            <p>Workplace: ${workplace}</p>
        `;
        skillsOutput.innerHTML = `
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Show the resume output section
        output.classList.remove("hidden");

        // Generate and display the unique URL based on username
        const baseUrl = window.location.href; // Get the current base URL
        const resumeUrl = `${baseUrl}resume/${encodeURIComponent(username)}`;
        shareUrl.innerHTML = `Shareable URL: <a href="${resumeUrl}" target="_blank">${resumeUrl}</a>`;
    });

    // Copy the shareable link to clipboard
    document.getElementById("share-link").addEventListener("click", () => {
        const linkText = shareUrl.textContent.split(' ').slice(-1)[0];
        navigator.clipboard.writeText(linkText).then(() => {
            alert("Link copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });

    // Download resume as a text file
    document.getElementById("download-resume").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("mail").value;
        const phone = document.getElementById("number").value;
        const fieldOfStudy = document.getElementById("Field").value;
        const school = document.getElementById("school").value;
        const workplace = document.getElementById("workplace").value;
        const skills = document.getElementById("skills").value;

        const resumeText = `
            Personal Information:
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Field of Study: ${fieldOfStudy}

            Education:
            School: ${school}

            Work Experience:
            Workplace: ${workplace}

            Skills:
            ${skills}
        `;

        const blob = new Blob([resumeText], { type: 'text/plain' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${name}_Resume.txt`;

        link.click();
    });
});
