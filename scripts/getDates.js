
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

/* dark Mode */
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#502F4C";
        main.style.color = "#F9F4F5";
        modeButton.textContent = "🔆";
    }
    else {
        main.style.background = "#F9F4F5"
        main.style.color = "#502F4C";
        modeButton.textContent = "🕶️";
    }
});