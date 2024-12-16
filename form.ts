// Function to handle form submission and generate CV
document.getElementById("resumeForm")?.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Handle the profile image upload
    const profileImageInput = document.getElementById("profileImage") as HTMLInputElement;
    const profileImage = profileImageInput?.files ? profileImageInput.files[0] : null;
    const imageUrl = profileImage ? URL.createObjectURL(profileImage) : "default-image.jpg"; // Default image if not provided

    // Create the CV HTML structure
    const cvHTML = `
        <div class="cv-header">
            <img src="${imageUrl}" alt="Profile Image" class="profile-image" />
            <h2>${fullName}</h2>
        </div>
        <div class="cv-section">
            <h3>Email</h3>
            <p>${email}</p>
        </div>
        <div class="cv-section">
            <h3>Phone</h3>
            <p>${phone}</p>
        </div>
        <div class="cv-section">
            <h3>Address</h3>
            <p>${address}</p>
        </div>
        <div class="cv-section">
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
        </div>
        <div class="cv-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div class="cv-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    // Display the generated CV in the cvOutput div
    const cvOutput = document.getElementById("cvOutput") as HTMLDivElement;
    cvOutput.innerHTML = cvHTML;
});
