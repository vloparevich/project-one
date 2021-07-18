const startGameBtn = document.querySelector(".btn.btn-success");
const landingPage = document.querySelector(".landing-page");
const cnavas = document.querySelector('#canvas');
const audio = new Audio('sounds/road-noise.mp3');
const game = new Game();

startGameBtn.addEventListener('click', () => {
    audio.play();
    landingPage.classList.toggle("hidden");
    cnavas.style.display = 'block';
    game.init();
})

