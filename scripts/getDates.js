
// Function to set the copyright year dynamically
function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('#copyright-year');
    copyrightElement.textContent = currentYear;
}

// Function to display the last modified date
function setLastModified() {
    const lastModified = new Date.parse(document.lastModified);
    const lastModifiedElement = document.querySelector('#lastModified');
    lastModified.textContent = lastModified.toDateString();
}

// Call the functions to update the elements
setCopyrightYear();
setLastModified();