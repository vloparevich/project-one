const startGameBtn = document.querySelector(".btn.btn-success");
const startAgainBtn = document.querySelector(".start-again");
const landingPage = document.querySelector(".landing-page");
const gameOverSection = document.querySelector(".game-over");
const canvas = document.querySelector('#canvas');
const context = canvas.getContext("2d");

let game = new Game(gameOverSection, canvas, context);

startGameBtn.addEventListener('click', () => {
    landingPage.classList.toggle("hidden");
    canvas.style.display = 'block';
    game.init();
});

startAgainBtn.addEventListener('click', () => {
    game = new Game(gameOverSection, canvas, context);
    gameOverSection.classList.toggle("hidden");
    canvas.style.display = 'block';
    game.init();
});

// Fix the cache issue. Upon first loading ther eis no some UI elements
window.onload = () => {
    if (!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}