class Score extends Component {
    constructor(obj, x, y) {
        super(obj, x, y);
        this.score = 0;
    }

    drawScore() {
        this.that.context.fillStyle = "blue";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`Score: ${this.score}`, this.x, this.y);
    }
}