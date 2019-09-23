function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
	angleMode(DEGREES);
}

let degrees = 0;
function draw() {
	let dolphinColor =('#5BA5FF');

	background(3, 206, 252);

	translate(50, 350);

	push();
		fill(dolphinColor);
		rotate(-45);
		ellipse(0, 0, 40, 100);
	pop();

	push();
		fill(dolphinColor);
		rotate(-55);
		ellipse(50, 0, 100, 50,);
	pop();

	//Origin Dot! Remove!
	fill(255, 0, 0);
	ellipse(0, 0, 5, 5);

	//Reference Dot! Remove!
	fill(255, 0, 0);
	ellipse(65,-85,5,5);
}
