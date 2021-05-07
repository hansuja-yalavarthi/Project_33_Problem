class Snow extends BaseClass {
    constructor(x, y) {
        //restitution = 0.5;
        super(x, y, 100, 100);
        this.snowImage = loadAnimation("snow4.webp", "snow5.webp");
        this.trajectory = [this.body.position.x, this.body.position.y];
    }

    display() {

        super.display();

        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.snowImage, this.trajectory[i][0], this.trajectory[i][1]);
        }

    }
}