"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("resumeForm");
    const output = document.getElementById("resume-output");
    const personalInfoOutput = document.getElementById("personal-info-output");
    const educationOutput = document.getElementById("education-output");
    const workExperienceOutput = document.getElementById("work-experience-output");
    const skillsOutput = document.getElementById("skills-output");

    document.getElementById("generateResume").addEventListener("click", () => {
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

    // Edit personal info
    document.getElementById("edit-personal-info").addEventListener("click", () => {
        const name = prompt("Edit Name:", document.getElementById("name").value);
        const email = prompt("Edit Email:", document.getElementById("mail").value);
        const phone = prompt("Edit Phone:", document.getElementById("number").value);
        const fieldOfStudy = prompt("Edit Field of Study:", document.getElementById("Field").value);

        if (name) document.getElementById("name").value = name;
        if (email) document.getElementById("mail").value = email;
        if (phone) document.getElementById("number").value = phone;
        if (fieldOfStudy) document.getElementById("Field").value = fieldOfStudy;

        personalInfoOutput.innerHTML = `
            <h3>Personal Information</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Field of Study: ${fieldOfStudy}</p>
        `;
    });

    // Edit education
    document.getElementById("edit-education").addEventListener("click", () => {
        const school = prompt("Edit School:", document.getElementById("school").value);
        if (school) document.getElementById("school").value = school;

        educationOutput.innerHTML = `
            <h3>Education</h3>
            <p>School: ${school}</p>
        `;
    });

    // Edit work experience
    document.getElementById("edit-work-experience").addEventListener("click", () => {
        const workplace = prompt("Edit Workplace:", document.getElementById("workplace").value);
        if (workplace) document.getElementById("workplace").value = workplace;

        workExperienceOutput.innerHTML = `
            <h3>Work Experience</h3>
            <p>Workplace: ${workplace}</p>
        `;
    });

    // Edit skills
    document.getElementById("edit-skills").addEventListener("click", () => {
        const skills = prompt("Edit Skills:", document.getElementById("skills").value);
        if (skills) document.getElementById("skills").value = skills;

        skillsOutput.innerHTML = `
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    });
});
