class Lives extends Component {
    constructor(obj, x, y, lives) {
        super(obj, x, y);
        this.lives = lives;
    }

    drawLives() {
        this.that.context.fillStyle = "red";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`Lives: ${this.lives}`, this.x, this.y);
    }

    getLives() {
        return this.lives;
    }
}