function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
}

let degrees = 0;
function draw() {

	background(3, 206, 252);
	rotate(degrees);
	//translate(200, 200);
	ellipse(0, 0, 50, 100);
	degrees = degrees + .05;

}
