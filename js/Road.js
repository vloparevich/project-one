class Road extends Component {
    constructor(obj, x, y, imgSrc) {
        super(obj, x, y, imgSrc);
        this.width = this.img.width * 7;
        this.height = this.img.height * 3;
    }
}