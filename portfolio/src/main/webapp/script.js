var turn = 0;
var imgArray = ["images/green.png","images/orange.png","images/yellow.png","images/blue.png"];

function addTextOnPostit(text, top, left){
	var tag = document.createElement("p");
	var value = document.createTextNode(text);
	tag.appendChild(value);
	tag.setAttribute("style", "position:absolute;top:"+(top+2)+"%;left:"+(left+1)+
					"%;font-family:'Montserrat',sans-serif;height:auto;width:8%;font-size: 15px;word-wrap: break-word;");
	document.getElementById("board").appendChild(tag);	
}

function getPostitText(){
	var msg = document.getElementById("msg").value;
	msg = msg.substring(0,41);
	msg = msg + "...";
	return msg;
}

function placePostit(){
	var img = document.createElement("img");
	img.setAttribute("src", imgArray[turn%4]);
	var top = Math.floor((Math.random() * 37) + 25);
	var left = Math.floor((Math.random() * 32) + 30);
	img.setAttribute("style", "position:absolute;top:"+top+"%;left:"+left+
					"%;height:auto;width:10%;");
		document.getElementById("board").appendChild(img);
	return [top,left];
}

function postIt(){	
	var position = placePostit();
	var postitText = getPostitText();
	addTextOnPostit(postitText, position[0], position[1]);
	turn++;	
}
