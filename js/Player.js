class Player extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width / 2.5;
        this.height = this.img.height / 2.5;
        this.imgWidthReducer = 0.8;
        this.imgHeightReducer = 0.8;
        this.stepX = 25;
        this.stepY = 50;
    }

    blinkingPlayer(number) {
        if (number % 2 === 1) {
            this.width = this.img.width * this.imgWidthReducer;
            this.height = this.img.height * this.imgHeightReducer;
            this.x = this.canvasWidth / 2 - 15;
            this.y = this.canvasHeight - 120 - 35;
        } else {
            this.setStandardSize();
            this.setStartingCoordinates();
        }
    }

    startingPoint() {
        this.setStartingCoordinates();
        let callCount = 1;
        let repeater = setInterval(() => {
            if (callCount < 7) {
                this.blinkingPlayer(callCount);
                callCount += 1;
            } else {
                clearInterval(repeater);
                this.setStandardSize();
                this.setStartingCoordinates();
            }
        }, 100);
    }

    setStandardSize() {
        this.width = this.img.width / 2.5;
        this.height = this.img.height / 2.5;
    }

    setStartingCoordinates() {
        this.x = this.canvasWidth / 2;
        this.y = this.canvasHeight - 120;
    }

    move() {
        document.addEventListener('keydown', (event) => {
            const code = event.code;
            switch (code) {
                case 'ArrowRight':
                case 'KeyD':
                    if (this.x < this.that.canvas.width - this.width - 15) {
                        this.x += this.stepX;
                    }
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    if (this.x > 3) {
                        this.x -= this.stepX;
                    }
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    if (this.y < this.that.canvas.height - this.height - 50) {
                        this.y += this.stepY;
                    }
                    break;
                case 'ArrowUp':
                case 'KeyW':
                    if (this.y > 95) {
                        this.y -= this.stepY;
                    }
                    break;
                default:
                    console.log("User did not provide any directions")
            }
        })
    }

    isCollidedCar(obj) {
        if (this.x > obj.x &&
            this.x < obj.x + obj.width &&
            ((this.y > obj.y && this.y < obj.y + obj.height) ||
                (this.y + this.height > obj.y &&
                    this.y + this.height < obj.y + obj.height))) {
            return true;
        } else {
            return false;
        }
    }

    isCollidedObject(obj) {
        if (obj.x + obj.width / 2 > this.x && obj.x + obj.width / 2 < this.x + this.width &&
            ((this.y > obj.y && this.y < obj.y + obj.height) ||
                (this.y + this.height > obj.y &&
                    this.y + this.height < obj.y + obj.height))) {
            return true;
        } else {
            return false;
        }
    }

}