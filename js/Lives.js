class Lives extends Component {
    constructor(obj, x, y, lives, imgSrc) {
        super(obj, x, y, imgSrc);
        this.lives = lives;
    }

    drawLives() {
        this.that.context.fillStyle = "red";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`LIVES: ${this.lives}`, this.x, this.y);
    }

    getLives() {
        return this.lives;
    }
}