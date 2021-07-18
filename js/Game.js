class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.ladyBug = new Player(this, 150, 150, "./images/lady-bug.png");
        this.road = new Road(this, 0, 25, "./images/road.jpg");
        this.grass = new GrassFooter(this, -5, 665, "./images/grass.png")
        this.clouds = new Clouds(this, 0, 10, "./images/cloud.png")
        this.sky = new Sky(this, 0, 0, "./images/sky.jpg");
        this.sun = new Sun(this, 800, 15, "./images/sun.png");

        this.car1 = new Car(this, 0, 175, "./images/car.png");
        this.car2 = new Car(this, 0, 287, "./images/car.png");
        this.car3 = new Car(this, 0, 410, "./images/car.png");
        this.car4 = new Car(this, 0, 515, "./images/car.png");

        this.score = new Score(this, 10, 100);
        this.lives = new Lives(this, this.canvas.width - 120, 100);
    }

    init() {
        this.drawLoop()
        this.ladyBug.move();

    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.road.drawComponent()
        this.sky.drawComponent();
        this.ladyBug.drawComponent();
        this.grass.drawComponent();
        this.sun.drawComponent()
        this.clouds.cloudAnimation();

        this.car1.carMoving();
        this.car2.carMoving();
        this.car3.carMoving();
        this.car4.carMoving();
        this.score.drawScore();
        this.lives.drawLives();

        // console.log(this.car1.dynamicX, this.car1.y, this.car1.yPlusHeight);

        requestAnimationFrame(() => this.drawLoop());
    }
}