class Lives extends Component {
    constructor(obj, x, y) {
        super(obj, x, y);
        this.lives = 3;
    }

    drawLives() {
        this.that.context.fillStyle = "red";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`Lives: ${this.lives}`, this.x, this.y);
    }
}