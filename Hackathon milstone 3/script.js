var _a;
// Form submission ka event listener
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Default form submission ko rokna
    // Form ke elements ko get karna
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var imageInput = document.getElementById('imageInput');
    
    // Validate karna ke sab required fields hain
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;

        // Profile image handle karna
        var imageFile = imageInput.files ? imageInput.files[0] : null; // Image file lena
        var reader_1 = new FileReader();

        // Jab image load ho jaye, tab profile image ko update karna
        reader_1.onloadend = function () {
            var profileImageElement = document.getElementById('profileImage');
            if (profileImageElement) {
                profileImageElement.src = reader_1.result; // Image ka source set karna
            }
        };

        // Agar image file selected hai, to usse Data URL ke roop mein read karna
        if (imageFile) {
            reader_1.readAsDataURL(imageFile);
        }

        // Resume ka output generate karna
        var resumeOutput = `
            <h2>Generated Resume</h2> <!-- Yahan par heading "Generated Resume" aa rahi hai -->
            <img id="profileImage" src="${imageFile ? reader_1.result : ''}" alt="Profile Image" />
            <p><strong>Name:</strong> ${name_1}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        
        // Resume output ko page par dikhana
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
