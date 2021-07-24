class Car extends Component {
    constructor(obj, x, y, rightDirection, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width * 0.65
        this.height = this.img.height * 0.65
        this.yPlusHeight = this.height + y;
        this.rightDirection = rightDirection;
        this.speed = 2;
        this.direction = rightDirection;
        this.x = Math.random() * this.that.canvasWidth;
    }

    carMoving() {
        this.rightDirection === true ? this.x += this.speed : this.x -= this.speed
        if (this.rightDirection === true) {
            if (this.x >= this.canvasWidth) {
                this.x = Math.random() * -this.that.canvasWidth;
            }
        } else {
            if (this.x <= -this.width) {
                this.x = Math.random() * this.that.canvasWidth;
                this.x = Math.random() * this.that.canvasWidth + this.that.canvasWidth;
            }
        }
        this.speed = Math.random() * 4 + 5;
        this.that.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}