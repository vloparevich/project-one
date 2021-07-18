class Car extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width * 0.65
        this.height = this.img.height * 0.65
        this.yPlusHeight = this.height + y;
        this.speed = Math.random() * 5 + 5;
        this.dynamicX = Math.random() * -this.that.canvasWidth;
    }


    carMoving() {
        this.dynamicX += this.speed;
        if (this.dynamicX >= this.canvasWidth) {
            this.dynamicX = Math.random() * -this.that.canvasWidth;
            this.speed = Math.random() * 5 + 5;
        }
        this.that.context.drawImage(this.img, this.dynamicX, this.y, this.width, this.height);
    }
}