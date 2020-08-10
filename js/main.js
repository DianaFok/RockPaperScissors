var botScore=0;
var	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;

function playerThrowsRock(){
	var botsWeapon=getRandomWeapon ();//getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}

function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon ();//getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}

function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon ();//getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("It's a tie, Gandalf is frustrated");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Middle-earth has been lost");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Middle-earth has been saved");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
