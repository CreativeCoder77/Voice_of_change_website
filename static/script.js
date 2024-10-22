const modal = document.getElementById('formModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const form = document.getElementById('detailsForm');
const phoneInput = document.getElementById('message');

// New feedback modal and form elements
const feedbackModal = document.getElementById('feedbackModal');
const openFeedbackModalBtn = document.getElementById('openFeedbackModalBtn');
const closeFeedbackModalBtn = document.getElementById('closeFeedbackModalBtn');
const feedbackForm = document.getElementById('feedbackForm');

// Function to open modal
function openModal(modalElement) {
    modalElement.style.display = 'block';
}

// Function to close modal
function closeModal(modalElement) {
    modalElement.style.display = 'none';
}

// Event listeners for Join Now modal
openModalBtn.addEventListener('click', () => openModal(modal));
closeModalBtn.addEventListener('click', () => closeModal(modal));

// Event listeners for Feedback modal
openFeedbackModalBtn.addEventListener('click', () => openModal(feedbackModal));
closeFeedbackModalBtn.addEventListener('click', () => closeModal(feedbackModal));

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal(modal);
    }
    if (e.target === feedbackModal) {
        closeModal(feedbackModal);
    }
});

// Join Now form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneNumber = phoneInput.value.trim();
    if (phoneNumber.length !== 10) {
        alert('Phone number must be exactly 10 digits.');
    } else {
        closeModal(modal);
    }
});

// Feedback form submit event
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedbackMessage = document.getElementById('feedbackMessage').value.trim();
    if (feedbackMessage.length < 10) {
        alert('Please provide more detailed feedback (at least 10 characters).');
    } else {
        closeModal(feedbackModal);
    }
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const heroContent = document.querySelector('.card-container');
    if (isInViewport(heroContent)) {
        heroContent.classList.add('visible');
    }
}

window.addEventListener('scroll', handleScroll);

window.onload = handleScroll;

window.onscroll = function () {
    var scrollToTop = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.classList.add("show");
    } else {
        scrollToTop.classList.remove("show");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}