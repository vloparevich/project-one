const startGameBtn = document.querySelector(".btn.btn-success");
const landingPage = document.querySelector(".landing-page");
const cnavas = document.querySelector('#canvas');

const game = new Game();

startGameBtn.addEventListener('click', () => {

    landingPage.classList.toggle("hidden");
    cnavas.style.display = 'block';
    game.init();
})

