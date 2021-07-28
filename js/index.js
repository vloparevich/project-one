const startGameBtn = document.querySelector(".btn.btn-success");
const startAgainBtn = document.querySelector(".start-again");
const landingPage = document.querySelector(".landing-page");
const gameOverSection = document.querySelector(".game-over");
const canvas = document.querySelector('#canvas');

let game = new Game(gameOverSection);

startGameBtn.addEventListener('click', () => {
    landingPage.classList.toggle("hidden");
    canvas.style.display = 'block';
    game.init();
});

startAgainBtn.addEventListener('click', () => {
    game = new Game(gameOverSection);
    gameOverSection.classList.toggle("hidden");
    canvas.style.display = 'block';
    game.init();
});