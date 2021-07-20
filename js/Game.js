class Game {


    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.audio = new Audio('sounds/road-noise.mp3');
        this.ladyBug = new Player(this, this.canvasWidth / 2, this.canvasHeight - 150, "./images/lady-bug.png", 3);
        this.road = new Road(this, 0, 25, "./images/road.jpg");
        this.grass = new GrassFooter(this, -5, 665, "./images/grass.png")
        this.sky = new Sky(this, 0, 0, "./images/sky.jpg");
        this.sun = new Sun(this, 800, 15, "./images/sun.png");
        this.clouds = new Clouds(this, 0, 10, "./images/cloud.png")
        this.gameOver = new GameOver(this, 0, 0, "./images/game-over.png")
        this.score = new Score(this, 10, 100);
        this.lives = new Lives(this, this.canvas.width - 120, 100, 5);

        this.cars = [
            new Car(this, 0, 175, "./images/car.png"),
            new Car(this, 0, 287, "./images/car.png"),
            new Car(this, 0, 410, "./images/car.png"),
            new Car(this, 0, 515, "./images/car.png")
        ];

        this.crystals = [];
        this.isDied = false;
    }

    init() {
        // this.audio.play();
        this.drawLoop()
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
    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.road.drawComponent()
        this.sky.drawComponent();

        this.sun.drawComponent()
        this.clouds.cloudAnimation();

        this.cars.forEach(car => {
            car.carMoving();
            if (this.ladyBug.isCollidedObject(car)) {
                this.ladyBug.startingPoint();
                this.lives.lives -= 1;
                if (this.lives.lives < 1) {
                    this.isDied = true;
                }
            }
        });
        this.crystals.forEach((crystal, index) => {
            crystal.drawComponent();
            if (this.ladyBug.isCollidedObject(crystal)) {
                this.score.score++;
                this.ladyBug.height += 5
                this.ladyBug.width += 5
                this.crystals.splice(index, 1)
            }
        });

        this.ladyBug.drawComponent();
        this.grass.drawComponent();
        this.score.drawScore();
        this.lives.drawLives();
        if (this.crystals.length === 0) {
            this.generateCrystals();
        }
        if (!this.isDied) {
            requestAnimationFrame(() => this.drawLoop());
        } else {
            this.gameOver.drawComponent();
        }
    }
}