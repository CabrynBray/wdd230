
// Function to set the copyright year dynamically
function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('#copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = currentYear;
    }

}

// Function to display the last modified date
function setLastModified() {
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.querySelector('#lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
}

// Call the functions to update the elements
setCopyrightYear();
setLastModified();

// Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});