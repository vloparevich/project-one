class Score extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.score = 0;
        this.tempScore = 0
    }

    drawScore() {
        this.that.context.fillStyle = "rgb(0,255,255)";
        this.that.context.fillRect(this.x - 15, this.y - 35, 240, 100);
        this.that.context.fillStyle = "blue";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`SCORE: ${this.score}`, this.x, this.y);
    }

    drawTempScore() {

        this.that.context.fillStyle = "green";
        this.that.context.font = "30px Arial"
        this.that.context.fillText(`COLLECTED: ${this.tempScore}`, this.x, this.y + 50);
    }

    drawYourFinalScore() {
        this.x = this.canvasWidth / 2 - 300;
        this.y = this.canvasHeight - 120;
        this.that.context.fillStyle = "blue";
        this.that.context.font = "bold 50px sans-serif"
        this.that.context.fillText(`FINALLY, YOUR SCORE:`, this.x, this.y);
        this.that.context.fillStyle = "red";
        this.that.context.font = "bold 70px sans-serif"
        this.that.context.fillText(`${this.score}`, this.x + 585, this.y + 5);
    }
}