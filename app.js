// Function to toggle the skills section visibility
function toggleSkillsSection() {
    var skillsSection = document.getElementById('skillsSection');
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
}
// Add event listener to the toggle button
var toggleButton = document.getElementById('toggleSkillsButton');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkillsSection);
}
