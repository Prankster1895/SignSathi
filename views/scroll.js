
document.addEventListener('DOMContentLoaded', function () {
    const featuresLinks = document.getElementsByClassName("nav-link features");
    const cardGroup = document.querySelector('.card-group');
    const aboutLinks = document.getElementsByClassName("nav-link aboutnav");
    const about = document.querySelector('.about');
    const contactLinks = document.getElementsByClassName("nav-link contact");
    const contact = document.querySelector('.cnt');
    if (featuresLinks && cardGroup) {
        Array.from(featuresLinks).forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                cardGroup.scrollIntoView({ behavior: 'smooth' });
            });
        });
    } 
    
    if (aboutLinks && about) {
        Array.from(aboutLinks).forEach(function (link2) {
            link2.addEventListener('click', function (event) {
                event.preventDefault();
                about.scrollIntoView({ behavior: 'smooth' });
            });
        });
    } else {
        console.log("Error detected");
    }
    if (contactLinks && contact) {
        Array.from(contactLinks).forEach(function (link3) {
            link3.addEventListener('click', function (event) {
                event.preventDefault();
                contact.scrollIntoView({ behavior: 'smooth' });
            });
        });
    } else {
        console.log("Error detected");
    }
    const showButtons = document.querySelectorAll('.show-popup');
    const closeButtons = document.querySelectorAll('.close-popup');
    const popupContainer = document.getElementById('popup-container');

    showButtons.forEach(button => {
        button.addEventListener('click', function () {
            popupContainer.style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            popupContainer.style.display = 'none';
        });
    });
    const showButtonscost = document.querySelectorAll('.show-popup-cost');
    const closeButtonscost = document.querySelectorAll('.close-popup-cost');
    const popupContainercost = document.getElementById('popup-container-cost');

    showButtonscost.forEach(button => {
        button.addEventListener('click', function () {
            popupContainercost.style.display = 'flex';
        });
    });

    closeButtonscost.forEach(button => {
        button.addEventListener('click', function () {
            popupContainercost.style.display = 'none';
        });
    });
});
 if (userCreated) { 

        // Disable the "Join the waitlist" button
        document.getElementById("join").disabled = true;

 } 
 

