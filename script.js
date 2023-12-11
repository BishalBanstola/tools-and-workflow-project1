$(document).ready(function () {
    const eligibilityBox = $('#eligibility');
    const documentsBox = $('#documents');
    const howToApplyBox = $('#how-to-apply');
    const afterApplyBox = $('#after-apply');
    const eligibilitySection = $('#eligibility-section');
    const documentsSection = $('#documents-section');
    const howToApplySection = $('#how-to-apply-section');
    const afterApplySection = $('#after-apply-section');
    const heroImage = $('#hero-image');
    const howToApplyVideo = $('#how-to-apply-section .video iframe');
    const doubleClickInstruction = $('.double-click-instruction');
    const allListItems = $('li');
    const allSectionHeadings = $('h2, h3');

    //cookies
    function checkCookieConsent() {
        return localStorage.getItem('cookieConsent') === 'true';
    }

    function setCookieConsent() {
        localStorage.setItem('cookieConsent', 'true');
    }

    if (!checkCookieConsent()) {
        $('#cookieModal').modal('show');
    }

    $('#cookieModal').on('hide.bs.modal', function () {
        setCookieConsent();
    });

    //important updates modal
    function checkNeverShowUpdates() {
        return localStorage.getItem('neverShowUpdates') === 'true';
    }

    function setNeverShowUpdates() {
        localStorage.setItem('neverShowUpdates', 'true');
    }
    function checkNeverShowUpdates() {
        return localStorage.getItem('neverShowUpdates') === 'true';
    }
    $('#neverShowUpdatesBtn').click(function () {
        setNeverShowUpdates();
        $('#importantUpdatesModal').modal('hide');
    });

    function setNeverShowUpdates() {
        localStorage.setItem('neverShowUpdates', 'true');
    }
    if (!checkNeverShowUpdates()) {
        $('#importantUpdatesModal').modal('show');
    }

    //feedback modal
    var feedbackType = localStorage.getItem('feedbackType') || 'none';

    updateFeedbackModalContent();

    $('#upvoteBtn').click(function () {
        feedbackType = 'upvote';
        updateFeedbackModalContent();
    });

    $('#downvoteBtn').click(function () {
        feedbackType = 'downvote';
        updateFeedbackModalContent();
    });

    function updateFeedbackModalContent() {
        localStorage.setItem('feedbackType', feedbackType);

        if (feedbackType === 'upvote') {
            $('#feedbackMessage').text('Thank you for your upvote!');
        } else if (feedbackType === 'downvote') {
            $('#feedbackMessage').text('Sorry to hear that. Your downvote has been noted.');
        } else {
            $('#feedbackMessage').text('How would you rate this site?');
        }
    }

    //scroll function
    function scrollToSection(section) {
        console.log('here');
        const offset = section.offset().top + $(window).scrollTop();
        $('html, body').animate({
            scrollTop: offset
        }, 'instant');
    }

    eligibilityBox.on('click', function () {
        scrollToSection(eligibilitySection);
    });
    documentsBox.on('click', function () {
        scrollToSection(documentsSection);
    });
    howToApplyBox.on('click', function () {
        scrollToSection(howToApplySection);
    });
    afterApplyBox.on('click', function () {
        scrollToSection(afterApplySection);
    });

    heroImage.on('mouseenter', function () {
        heroImage.css('transform', 'scale(1.2)');
    });

    heroImage.on('mouseout', function () {
        heroImage.css('transform', 'scale(1)');
    });

    doubleClickInstruction.on('dblclick', function () {
        window.open('https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html', '_blank');
    });

    $(document).on('contextmenu', function (event) {
        event.preventDefault();
        alert('Visit the IRRC website for more information.');
    });

    allListItems.css('font-weight', 'bold');

    allSectionHeadings.css('color', '#ff6b6b');

    $('#printButton').on('click', function () {
        $(this).fadeOut('fast', function () {
            $(this).fadeIn('fast');
        });
        printChecklist();
    });

    function printChecklist() {
        $('#printButton').css('display', 'none');
        let printWindow = window.open('', '_blank');
        let checklistContent = $('#documents-section')[0].outerHTML;

        printWindow.document.write('<html><head><title>Documents Required Checklist</title></head><body>');
        printWindow.document.write(checklistContent);
        printWindow.document.write('</body></html>');

        printWindow.print();

        $('#printButton').css('display', 'block');
        printWindow.close();
    }

    $(window).on('scroll', function () {
        toggleGoToTopButton();
    });

    function toggleGoToTopButton() {
        let button = $('#goToTopButton');
        if ($(document).scrollTop() > 20) {
            button.css('display', 'block');
        } else {
            button.css('display', 'none');
        }
    }

    $('#goToTopButton').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});



