var _a;
// Function to handle form submission and generate CV
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Collect form data
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var workExperience = document.getElementById("workExperience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    // Handle the profile image upload
    var profileImageInput = document.getElementById("profileImage");
    var profileImage = (profileImageInput === null || profileImageInput === void 0 ? void 0 : profileImageInput.files) ? profileImageInput.files[0] : null;
    var imageUrl = profileImage ? URL.createObjectURL(profileImage) : "default-image.jpg"; // Default image if not provided
    // Create the CV HTML structure
    var cvHTML = "\n        <div class=\"cv-header\">\n            <img src=\"".concat(imageUrl, "\" alt=\"Profile Image\" class=\"profile-image\" />\n            <h2>").concat(fullName, "</h2>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Email</h3>\n            <p>").concat(email, "</p>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Phone</h3>\n            <p>").concat(phone, "</p>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Address</h3>\n            <p>").concat(address, "</p>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Work Experience</h3>\n            <p>").concat(workExperience, "</p>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n        <div class=\"cv-section\">\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    // Display the generated CV in the cvOutput div
    var cvOutput = document.getElementById("cvOutput");
    cvOutput.innerHTML = cvHTML;
});
