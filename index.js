	//CREATES A FUNCTION THAT CREATES A RANDOM NUMBER AND PUTS IT IN THE CIRCLE
	function random(){
		//SELECT THE FIVE CIRCLES ON THE PAGE
		var one= document.getElementById('one');
		var two= document.getElementById('two');
		var three= document.getElementById('three');
		var four= document.getElementById('four');
		var five= document.getElementById('five');
		var six= document.getElementById('six');

		var ball1 = Math.floor(Math.random() * 29) + 1;
		var ball2 = Math.floor(Math.random() * 46) + 2;
		var ball3 = Math.floor(Math.random() * 47) + 11;
		var ball4 = Math.floor(Math.random() * 48) + 21;
		var ball5 = Math.floor(Math.random() * 29) + 40;
		// console.log(ball5)
		var powerBall = Math.floor(Math.random() * 26) + 1;

			//CHECK FOR DUPLICATE
			if (ball2 === ball1 || ball2 === ball3 || ball2 === ball4 || ball2 === ball5) {
			console.log("duplicate with 2nd ball " + ball1 + "," + ball2 + "," + ball3 +","  + ball4 +","  + ball5)
			var ball2 = Math.floor(Math.random() * 46) + 2;
				return ball2
		}
		else if (ball3 === ball1 || ball3 === ball4 || ball3 === ball5) {
			console.log("duplicate with 3rd ball " + ball1 + "," + ball2 + "," + ball3 +","  + ball4 +","  + ball5)
			var ball3 = Math.floor(Math.random() * 47) + 11;
			return ball3
				}
		else if (ball4 === ball3 || ball4 === ball5) {
			console.log("duplicate with 4th ball " + ball1 + "," + ball2 + "," + ball3 +","  + ball4 +","  + ball5)
				var ball4 = Math.floor(Math.random() * 28) + 21;
			return ball4
			}
				else if (ball5 === ball1 || ball5 === ball2 || ball5 === ball3 || ball5 === ball4 || ball5 < 40) {
			console.log("duplicate with 4th ball " + ball1 + "," + ball2 + "," + ball3 +","  + ball4 +","  + ball5)
				var ball5 = Math.floor(Math.random() * 29) + 40;
			return ball5
		}

		//SORT AND LOOP
		 const balls = [ball1, ball2, ball3, ball4, ball5];
		 balls.sort(function (a, b) { return a - b });

			console.log(balls)

//INSERT INTO BALLS
	one.textContent = balls[0];
	two.textContent = balls[1];
	three.textContent = balls[2];
	four.textContent = balls[3];
	five.textContent = balls[4];

		//FOR POWERBALL
		six.style.color = 'white';
		six.textContent = powerBall;

	}