class Sun extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width / 2.75;
        this.height = this.img.height / 2.75;
    }

    sunMoving() {
        this.x += 1;
        if (this.x < this.canvasWidth + 50) {
            this.that.context.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            this.x = -this.width;
        }
    }
}