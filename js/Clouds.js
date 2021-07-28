class Clouds extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width / 6;
        this.height = this.img.height * 0.15;
        this.firstImageX = this.canvasWidth;
        this.nextImageX = 0;
    }

    cloudAnimation() {
        this.firstImageX--;
        if (this.firstImageX <= 0) {
            this.firstImageX = this.canvasWidth;
        }
        this.nextImageX--;
        if (this.nextImageX < -this.canvasWidth) {
            this.nextImageX = 0;
        }
        this.that.context.drawImage(this.img, this.firstImageX, this.y, this.width, this.height);
        this.that.context.drawImage(this.img, this.nextImageX, this.y, this.width, this.height);
    }
}