const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById("careerForm1").addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const position = document.getElementById("position").value.trim();
    const cv = document.getElementById("cv").files.length;

    // Check if all fields are filled
    if (!name || !email || !phone || !position || cv === 0) {
        alert("Please fill out all fields and upload your CV.");
        return;
    }

    // If validation passes, show the thank-you message
    document.getElementById("careerForm1").style.display = "none";
    document.getElementById("thankYouMessage1").style.display = "block";
});

