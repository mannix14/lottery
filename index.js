	//CREATES A FUNCTION THAT CREATES A RANDOM NUMBER AND PUTS IT IN THE CIRCLE
	function random(){
		//SELECT THE FIVE CIRCLES ON THE PAGE
		var one= document.getElementById('one');
		var two= document.getElementById('two');
		var three= document.getElementById('three');
		var four= document.getElementById('four');
		var five= document.getElementById('five');
		var six= document.getElementById('six');

		//CREATE A RANDOM NUMBER FOR EACH OF THE CIRCLES
		var ball1 = Math.floor(Math.random() * 29) + 1;
		var ball2 = Math.floor(Math.random() * 46) + 2;
		var ball3 = Math.floor(Math.random() * 47) + 11;
		var ball4 = Math.floor(Math.random() * 48) + 21;
		var ball5 = Math.floor(Math.random() * 29) + 40;
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
		else if (ball4 === ball1 || ball4 === ball5) {
			console.log("duplicate with 4th ball " + ball1 + "," + ball2 + "," + ball3 +","  + ball4 +","  + ball5)
			var ball4 = Math.floor(Math.random() * 31) + 30;
			return ball4
		}

		//PUT RANDOM NUMBERS TO EACH OF THE CIRCLES
		one.textContent = ball1;
		two.textContent = ball2;
		three.textContent = ball3;
		four.textContent = ball4;
		five.textContent = ball5;



		//THIS ONE IS DIFFERENT BECAUSE THE CIRCLE IS RED
		six.style.color = 'white';
		six.textContent = powerBall;

	}