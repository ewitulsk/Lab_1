function setup() {
	createCanvas(400, 400);
	ellipseMode(CENTER);
	angleMode(DEGREES);
}

let degrees = 0;
let blue1rate = .025;
let blue2rate = .075;
let blue = 0;
let blue2 = 0;
let color = 'up';
function draw() {
	let dolphinColor =('#5BA5FF');

	background(3, 206, 252);

//Background Layer 1
	for(let x = 0; x < 400; x = x+100){  //to make this work I followed the house example here https://genekogan.com/code/p5js-transformations/
		for(let y = 0; y < 400; y = y+50){
			push();


			if (color === 'up'){ //Didn't know exact syntax for if in js, used this as reference https://www.w3schools.com/js/js_if_else.asp
					blue = blue+blue1rate;
				} else if (color === 'down'){
					blue = blue-blue1rate;
				}
			if(round(blue) === 0){
				color = 'up'
			} else if(round(blue) === 255){
				console.log("hit");
				color = 'down'
			}
				console.log(blue); //My blue thing was being screwy so i needed to see what blue was, i referenced this to output to console. https://www.w3schools.com/js/js_output.asp
				console.log(color);
				fill(50,50,blue);
				translate(x,y);
				triangle(0,50,50,10,100,50);

			pop();
		}
	}
//Background Layer 2
	for(let w = -50; w < 400; w = w+100){  //to make this work I followed the house example here https://genekogan.com/code/p5js-transformations/
		for(let z = -75; z < 400; z = z+100){
			push();
			if (color === 'up'){ //Didn't know exact syntax for if in js, used this as reference https://www.w3schools.com/js/js_if_else.asp
				blue2 = blue2+blue2rate;
			} else if (color === 'down'){
				blue2 = blue2-blue2rate;
			}
			if(round(blue2) === 0){  //An issue I was having was that blue never actually hit exactly 255, it was always some decimal, so, I just rounded to fix that.
				color = 'up'
			} else if(round(blue2) === 255){
				console.log("hit");
				color = 'down'
			}
			fill(55,40,blue2);
			translate(w,z);
			triangle(0,50,50,10,100,50);
			pop();
		}
	}
//The Sun!



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

		//Mouth
			push();
				stroke(5);
				line(80,15, 100, 15);
			pop();
		pop();

	pop();

	//Origin Dot! Remove!
	//fill(255, 0, 0);
	//ellipse(0, 0, 5, 5);


}


