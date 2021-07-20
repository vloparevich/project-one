class Component {
    constructor(obj, x, y, imgSrc) {
        this.that = obj;
        this.imgSrc = imgSrc;
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = imgSrc;
        this.width = this.img.width;
        this.height = this.img.height;
        this.canvasWidth = obj.canvasWidth;
        this.canvasHeight = obj.canvasHeight;
    }

    drawComponent = () => {
        this.that.context.drawImage(this.img, this.x, this.y, this.width, this.height);
    }



}