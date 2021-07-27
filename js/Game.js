class Game {
    constructor(gameOverSection) {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.backgroundAudio = new Audio('sounds/road-noise.wav');
        this.mainThemeMusic = new Audio('sounds/main-theme.mp3')
        this.unloadingOnTheSun = new Audio('sounds/sun-collision.wav');
        this.ladyBug = new Player(this, this.canvasWidth / 2, this.canvasHeight - 120, "./images/lady-bug.png", 3);
        this.road = new Road(this, 0, 25, "./images/road.jpg");
        this.grass = new GrassFooter(this, -5, 665, "./images/grass.png")
        this.mountains = new Mountains(this, 0, 0, "./images/mountains.png");
        this.sun = new Sun(this, 800, 15, "./images/sun.png");
        this.clouds = new Clouds(this, 0, 10, "./images/cloud.png")
        this.gameOver = new GameOver(this, 0, 0, "./images/game-over.png")
        this.score = new Score(this, 10, 735, "");
        this.lives = new Lives(this, this.canvas.width - 150, 100, 5, "");
        this.cars = [
            new Car(this, 0, 175, true, "./images/car.png"),
            new Car(this, 0, 287, true, "./images/car.png"),
            new Car(this, this.canvasWidth, 410, false, "./images/car-right.png"),
            new Car(this, this.canvasWidth, 515, false, "./images/car-right.png")
        ];
        this.crystals = [];
        this.unloadedCrystals = [];
        this.isDied = false;
        this.gameOverSection = gameOverSection;
        this.gameStarted = false;
    }

    init() {
        // this.backgroundAudio.addEventListener('ended', function () {
        //     this.play();
        // }, false);

        // this.mainThemeMusic.addEventListener('ended', function () {
        //     this.play();
        // });

        // this.mainThemeMusic.play();
        // this.backgroundAudio.play();
        this.drawLoop();
        this.ladyBug.move();
    }

    generateCrystals() {
        let picIndex = 1;
        for (let i = 0; i < this.score.score + 3; i++) {
            if (picIndex <= 3) {
                let x = Math.random() * this.canvasWidth * 0.9;
                let y = Math.random() * (this.canvasHeight * 0.45) + 250
                this.crystals.push(new Crystal(this, x, y, `./images/crystal-${picIndex}.png`));
                picIndex++;
            } else {
                picIndex = 1;
            }
        }
    };

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.road.drawComponent();
        this.mountains.drawComponent();
        this.sun.sunMoving();
        this.ladyBug.drawComponent();
        this.clouds.cloudAnimation();
        this.grass.drawComponent();
        this.score.drawScore();
        this.score.drawTempScore();
        this.lives.drawLives();

        if (!this.gameStarted) {
            this.ladyBug.startingPoint();
            this.gameStarted = true;
        }

        this.cars.forEach(car => {
            car.carMoving();
            if (this.ladyBug.isCollidedCar(car)) {
                this.ladyBug.startingPoint();
                this.lives.lives -= 1;
                new Audio('sounds/car-collison.wav').play();
                this.score.tempScore = 0;
                if (this.lives.lives < 1) {
                    this.isDied = true;
                }
            }
        });

        this.crystals.forEach((crystal, index) => {
            crystal.drawComponent();
            if (this.ladyBug.isCollidedObject(crystal)) {
                this.ladyBug.height += 5;
                this.ladyBug.width += 5;
                this.crystals.splice(index, 1);
                this.score.tempScore += 1;
                new Audio('sounds/eat-crystal.wav').play();
            }
        });

        if (this.ladyBug.isCollidedObject(this.sun)) {
            this.ladyBug.width = this.ladyBug.img.width / 2.5;
            this.ladyBug.height = this.ladyBug.img.height / 2.5;
            if (this.score.tempScore > 0) {
                this.unloadingOnTheSun.play();
                // const tempCrystal = this.crystals[0];
                // tempCrystal.flyAway(this.ladyBug);
            }
            this.score.score += this.score.tempScore;
            this.score.tempScore = 0;
        }

        if (this.crystals.length === 0) {
            this.generateCrystals();
        }

        if (!this.isDied) {
            window.requestAnimationFrame(() => this.drawLoop());
        } else {
            this.gameOver.drawComponent();
            this.backgroundAudio.pause();
            this.score.drawYourFinalScore();
            gameOverSection.classList.toggle("hidden");
        }
    }
}