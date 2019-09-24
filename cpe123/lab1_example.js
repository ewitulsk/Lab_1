function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
	angleMode(DEGREES);
}

let degrees = 0;
function draw() {
	let dolphinColor =('#5BA5FF');

	background(3, 206, 252);


//The Actual Dolphin
	noStroke();
	translate(50, 350);
	rotate(-45);

	//Body Pieces
	push();

		//Tail
		fill(dolphinColor);
		ellipse(0, 0, 40, 100);

		//Body Piece 1
		fill(dolphinColor);
		rotate(-10);
		ellipse(50, 0, 100, 50);

		//Reference Dot
	//	push();
	//		fill(255, 0, 0);
	//		ellipse(50, 25, 5, 5);
	//	pop();

		//Body Piece 2
		translate(50,0);
		rotate(10);
		ellipse(50, 0, 125, 65);

		//Reference Dot 2
	//	push();
	//		fill(255, 0, 0);
	//		ellipse(50, 32.5, 5, 5);
	//	pop();

		//Body Piece 3
		translate(100,0);
		rotate(20);
		ellipse(50, 0, 150, 80);

		//Top Fin
	//	push();
	//		fill(255,0,0);
	//		ellipse(50,-40,5,5);
	//	pop();
		arc(50,-40,50,50, -210, -90);

		//Bottom Fin
	//	push();
	//		fill(255,0,0);
	//		ellipse(50,40,5,5);
	//	pop();
		arc(50,40,50,50, 210, 100);

		//Body Piece 4
		translate(100,0);
		rotate(30);
		ellipse(50, 0, 125, 80);

		//Nose
		ellipse(112.5, 0, 25,10);

		//Eye
		push();
			fill(0,0,0);
			ellipse(80, -15, 7, 7);
		pop();



	pop();

	//Origin Dot! Remove!
	//fill(255, 0, 0);
	//ellipse(0, 0, 5, 5);


}
