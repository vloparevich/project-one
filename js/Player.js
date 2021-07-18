class Player extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width / 2.5;
        this.height = this.img.height / 2.5;

    }

    move() {
        document.addEventListener('keydown', (event) => {
            const code = event.code;
            switch (code) {
                case 'ArrowRight':
                case 'KeyD':
                    if (this.x < this.that.canvas.width - this.width - 15) {
                        this.x += 25;
                    }
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    if (this.x > 3) {
                        this.x -= 25;
                    }
                    break;
                case 'ArrowDown':
                case 'KeyW':
                    if (this.y < this.that.canvas.height - this.height - 50) {
                        this.y += 50;
                    }
                    break;
                case 'ArrowUp':
                case 'KeyS':
                    if (this.y > 95) {
                        this.y -= 50;
                    }
                    break;
                default:
                    console.log("no direction set")
            }
        })
    }
}