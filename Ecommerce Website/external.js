const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

/********************image slider*************************/
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

// Clear any existing intervals before setting a new one
clearInterval(window.sliderInterval);

// Set an interval to change slides every 4 seconds
window.sliderInterval = setInterval(() => changeSlide(1), 4000);
/****************************************************************************/

/**************************SCROLL TO TOP BUTTON***********************************/
let mybutton = document.getElementById("scrollToTopBtn");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


mybutton.addEventListener('click', function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});
/******************USER LOGIN*****************/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        // Name validation
        if (validator.isEmpty(name.value.trim())) {
            alert('Name cannot be empty');
            valid = false;
        }

        // Email validation
        if (!validator.isEmail(email.value.trim())) {
            alert('Invalid email address');
            valid = false;
        }

        // Password validation
        if (!validator.isLength(password.value.trim(), { min: 8 })) {
            alert('Password must be at least 8 characters long');
            valid = false;
        }

        // Confirm password validation
        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert('Passwords do not match');
            valid = false;
        }
        if (!validator.matches(phone.value.trim(), /^[0-9]{1,11}$/)) {
            alert('Phone number must be alphanumeric and not more than 11 characters');
            valid = false;
        }
        if (valid) {
            alert('Registration successful!');
            // You can add code here to submit the form data to the server
            form.reset();
        }
    });
});
/****************************************************************************************/