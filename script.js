const eligibilityBox = document.getElementById('eligibility');
const documentsBox = document.getElementById('documents');
const howToApplyBox = document.getElementById('how-to-apply');
const afterApplyBox = document.getElementById('after-apply');
const eligibilitySection = document.getElementById('eligibility-section');
const documentsSection = document.getElementById('documents-section');
const howToApplySection = document.getElementById('how-to-apply-section');
const afterApplySection = document.getElementById('after-apply-section');
const eligibilityImage = document.querySelector('#eligibility-section .image img');
const howToApplyVideo = document.querySelector('#how-to-apply-section .video iframe');

function scrollToSection(section) {
    console.log('here')
    const offset = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        behavior: 'smooth',
        top: offset
    });
}

eligibilityBox.addEventListener('click', () => scrollToSection(eligibilitySection));
documentsBox.addEventListener('click', () => scrollToSection(documentsSection));
howToApplyBox.addEventListener('click', () => scrollToSection(howToApplySection));
afterApplyBox.addEventListener('click', () => scrollToSection(afterApplySection));