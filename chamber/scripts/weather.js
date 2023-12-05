// -------------------- Current Wether ---------------------------
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-26.12&lon=27.89&units=metric&appid=000316dee5050756ea86a2527d4effbb';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `png of ${desc}`);
    captionDesc.textContent = data.weather[0].main;
}

apiFetch();

// ---------------------- 3 Day Forecast ---------------------------

const forecastDay1 = document.querySelector("#forecast-day1");
const forecastDay2 = document.querySelector("#forecast-day2");
const forecastDay3 = document.querySelector("#forecast-day3");

const iconDay1 = document.querySelector("#icon-day1");
const iconDay2 = document.querySelector("#icon-day2");
const iconDay3 = document.querySelector("#icon-day3");

const figcaption1 = document.querySelector('#figcaption1');
const figcaption2 = document.querySelector('#figcaption2');
const figcaption3 = document.querySelector('#figcaption3');

const forecastIcon = document.querySelector('#forecast-icon');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=-26.12&lon=27.89&units=metric&appid=000316dee5050756ea86a2527d4effbb';

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = data.list;

    const day1 = forecastList[1];
    const day2 = forecastList[2];
    const day3 = forecastList[3];

    forecastDay1.innerHTML = `${getDayOfWeek(day1.dt_txt)} | Temp: ${day1.main.temp}&deg;C`;
    iconDay1.setAttribute('src', `https://openweathermap.org/img/w/${day1.weather[0].icon}.png`);
    iconDay1.setAttribute('alt', `png of ${day1.weather[0].description}`);
    figcaption1.textContent = `${day1.weather[0].main}`;

    forecastDay2.innerHTML = `${getDayOfWeek(day2.dt_txt)} | Temp: ${day2.main.temp}&deg;C`;
    iconDay2.setAttribute('src', `https://openweathermap.org/img/w/${day2.weather[0].icon}.png`);
    iconDay2.setAttribute('alt', `png of ${day2.weather[0].description}`);
    figcaption2.textContent = `${day2.weather[0].main}`;

    forecastDay3.innerHTML = `${getDayOfWeek(day3.dt_txt)} | Temp: ${day3.main.temp}&deg;C`;
    iconDay3.setAttribute('src', `https://openweathermap.org/img/w/${day3.weather[0].icon}.png`);
    iconDay3.setAttribute('alt', `png of ${day3.weather[0].description}`);
    figcaption3.textContent = `${day3.weather[0].main}`;

}

function getDayOfWeek(dateString) {
    const date = new Date(dateString + " UTC");
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
}

getForecast();
