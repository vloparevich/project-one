class Lives extends Component {
    constructor(obj, x, y, lives, imgSrc) {
        super(obj, x, y, imgSrc);
        this.lives = lives;
    }

    drawLives() {
        this.that.context.fillStyle = "rgb(0,255,255)";
        this.that.context.fillRect(this.canvasWidth - 165, this.canvasHeight - 80, 240, 100);
        this.that.context.fillStyle = "red";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`LIVES: ${this.lives}`, this.x, this.canvasHeight - 25);
    }

    getLives() {
        return this.lives;
    }
}