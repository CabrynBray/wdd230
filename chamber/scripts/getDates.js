
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
/* const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const card = document.querySelector(".card");
const mode = document.querySelector("#mode");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☆")) {
        main.style.background = "#502F4C";
        main.style.color = "#F9F4F5";

        header.style.background = "#C8B8DB";
        header.style.color = "#502F4C";

        mode.style.color = "#502F4C";

        menu.style.background = "#70587C";
        menu.style.color = "#C8B8DB";

        footer.style.background = "#C8B8DB";
        footer.style.color = "#502F4C";

        body.style.background = "#502F4C"

        card.style.border = "1px solid #C8B8DB";

        modeButton.textContent = "☀";
    }
    else {
        main.style.background = "#F9F4F5"
        main.style.color = "#502F4C";

        header.style.background = "#502F4C";
        header.style.color = "#C8B8DB";

        mode.style.color = "#C8B8DB";

        menu.style.background = "#C8B8DB";
        menu.style.color = "#70587C";

        footer.style.background = "#502F4C";
        footer.style.color = "#C8B8DB";

        body.style.background = "#F9F4F5";

        card.style.border = "1px solid #F9F4F5";

        modeButton.textContent = "☆";
    }
});
*/

/* Discover */
// Number of Visits
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".num-visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("number-of-visits")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("number-of-visits", numVisits);