const eligibilityBox = document.getElementById('eligibility');
const documentsBox = document.getElementById('documents');
const howToApplyBox = document.getElementById('how-to-apply');
const afterApplyBox = document.getElementById('after-apply');
const eligibilitySection = document.getElementById('eligibility-section');
const documentsSection = document.getElementById('documents-section');
const howToApplySection = document.getElementById('how-to-apply-section');
const afterApplySection = document.getElementById('after-apply-section');
const heroImage = document.querySelector('#home .image img');
const howToApplyVideo = document.querySelector('#how-to-apply-section .video iframe');
const doubleClickInstruction = document.querySelector('.double-click-instruction');

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

heroImage.addEventListener('mouseenter', () => {
    heroImage.style.transform = 'scale(1.2)';
});

heroImage.addEventListener('mouseout', () => {
    heroImage.style.transform = 'scale(1)';
});

doubleClickInstruction.addEventListener('dblclick', function () {
    window.open('https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html', '_blank');
});
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('Visit the IRRC website for more information.');
});