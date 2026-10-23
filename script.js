const contactForm = document.getElementById('main-form');
const submit = document.getElementById('submit-form');

// Form containers
const firstNameCont = document.querySelector('div.first-name');
const lastNameCont = document.querySelector('div.last-name');
const emailCont = document.querySelector('div.email');
const queryTypeCont = document.querySelector('div.query-type');
const messageCont = document.querySelector('div.message');
const contactConsentCont = document.querySelector('div.contact-consent-container');
const namePattern = /^\p{L}+(?:[ '’-]\p{L}+)*$/u;

submit.addEventListener('click', event => {
    let validFields = [];
    const contactFormData = new FormData(contactForm);
    for(const ele of contactFormData) {
        const key = ele[0];
        const value = ele[1];

        // Check each of the different form input types
        if(key == 'first-name') {
            if(!namePattern.test(value.trim())) {
                firstNameCont.classList.add('error');
            } else {
                firstNameCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'last-name') {
            if(!namePattern.test(value.trim())) {
                lastNameCont.classList.add('error');
            } else {
                lastNameCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'email') {
            // NOTE: regex from ChatGPT
            if(!value || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                emailCont.classList.add('error');
            } else {
                emailCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'query-type') {
            queryTypeCont.classList.remove('error');
            validFields.push(key);
        }
        if(key == 'message') {
            if(!value) {
                messageCont.classList.add('error');
            } else {
                messageCont.classList.remove('error');
                validFields.push(key);
            }
        }
        if(key == 'contact-consent') {
            contactConsentCont.classList.remove('error');
            validFields.push(key);
        }
    }

    // Add checks for the query type and contact consent inputs
    if(!validFields.find((val) => val == 'query-type')) {
        queryTypeCont.classList.add('error');
    }
    if(!validFields.find((val) => val == 'contact-consent')) {
        contactConsentCont.classList.add('error');
    }


    // contactForm.submit();
    // event.preventDefault();
});