// Function to toggle the skills section visibility
function toggleSkillsSection() {
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
}

// Add event listener to the toggle button
const toggleButton = document.getElementById('toggleSkillsButton');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkillsSection);
}
