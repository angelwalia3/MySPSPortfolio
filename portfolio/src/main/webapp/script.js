var turn = 0;

function postIt(){
	var imgArray = new Array();
	for(var i=0; i<imgArray.length; i++){
		imgArray[i] = new Image();
	}

	imgArray[0] = document.getElementById('p1');
	imgArray[1] = document.getElementById('p2');
	imgArray[2] = document.getElementById('p3');
	imgArray[3] = document.getElementById('p4');
	imgArray[4] = document.getElementById('p5');
	imgArray[5] = document.getElementById('p6');
	imgArray[6] = document.getElementById('p7');
	imgArray[7] = document.getElementById('p8');
	imgArray[8] = document.getElementById('p9');
	imgArray[9] = document.getElementById('p10');

	if (turn < 10){
		imgArray[turn].style.display="block";
		var top = Math.floor((Math.random() * 62) + 25);
		var left = Math.floor((Math.random() * 62) + 30);
		imgArray[turn].style.top=top.toString()+"%";
		imgArray[turn].style.left=left.toString()+"%";
		console.log(turn);
		console.log(top);
		console.log(left);
		turn++;
	}

	
}
