class GrassFooter extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width * 2;
        this.height = this.img.height * 0.85;
    }
}