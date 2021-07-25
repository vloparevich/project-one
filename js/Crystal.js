class Crystal extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = 60;
        this.height = 60;
        // this.x = x;
        // this.y = y;
    }

    // flyAway(ladyBug) {
    //     this.x = ladyBug.x;
    //     this.y = ladyBug.y;
    //     let callCount = 100;
    //     let repeater = setInterval(() => {
    //         if (callCount > 0) {
    //             console.log(this.x, this.y);
    //             this.that.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //             this.drawComponent(this.img, this.x, this.y, this.width, this.height);
    //             debugger;
    //             this.x += 10;
    //             this.y += 10;
    //             callCount -= 1;
    //         } else {
    //             clearInterval(repeater);
    //         }
    //     }, 50);
    // }
}