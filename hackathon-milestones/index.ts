document.addEventListener('DOMContentLoaded', () => {
   
    // Select the toggle button and the skills content div
    const toggleButton = document.querySelector('.toggle') as HTMLButtonElement|null;
    const skillsContent = document.querySelector('.list') as HTMLDivElement |null;

    // Check if the elements exist before adding event listeners
    if (toggleButton && skillsContent) {
        toggleButton.addEventListener('click', () => {
            // Toggle the 'show' class on the skills content
            skillsContent.classList.toggle('show');

            // Change the button text based on the visibility of the skills content
            if (skillsContent.classList.contains('show')) {
                toggleButton.textContent = 'Show Less';
            } else {
                toggleButton.textContent = 'Show More';
            }
        });
    }
});
