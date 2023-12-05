const today = new Date;
const banner = document.querySelector("#banner");
const bannerBtn = document.querySelector("#close-banner");

if (today.getDate() >= 0 && today.getDate() <= 2) {
    banner.style.display = 'flex';
}

bannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});
