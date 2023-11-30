const baseURL = "https://cabrynbray.github.io/wdd230/";
const linksURL = "https://cabrynbray.github.io/wdd230/data/links.json";

const weeksList = document.querySelector(".weeks")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {


    })
}

getLinks();
