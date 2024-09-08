"use strict";
window.addEventListener('DOMContentLoaded', () => {
    var _a;
    const form = document.getElementById("resumeForm");
    const output = document.getElementById("resume-output");
    const personalInfoOutput = document.getElementById("personal-info-output");
    const educationOutput = document.getElementById("education-output");
    const workExperienceOutput = document.getElementById("work-experience-output");
    const skillsOutput = document.getElementById("skills-output");
    (_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        // Get input values
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
    });
});
