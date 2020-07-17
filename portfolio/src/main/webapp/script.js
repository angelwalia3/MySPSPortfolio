// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

function sendEmail(){
	Email.send({
	Host: "smtp.gmail.com",
	Username : "spsportfolio03@gmail.com",
	Password : "catchrandommails",
	To : "spsportfolio03@gmail.com",
	From : "spsportfolio03@gmail.com",
	Subject : "Message from your portfolio",
	Body : document.getElementById("msg").value,
	}).then(
		message => alert("Message sent successfully!")
	);
}

function postIt(){	
	var position = placePostit();
	var postitText = getPostitText();
	addTextOnPostit(postitText, position[0], position[1]);
	sendEmail();
	turn++;	
}
