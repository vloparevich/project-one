class Sky extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width * 4;
        this.height = this.img.height * 0.7;
    }
}