
//---------------------------------WIN DYSPLAY ---------------------------------
var bet = 5;
var betExpectationValuefix = [1250, 750, 500, 250, 150, 100,50,25,10];
var betExpectationValue = [1250, 750, 500, 250, 150, 100,50,25,10];

function winExpectationDisplay(x){
  if(x){
    for (var i = 0; i < betExpectationValue.length; i++){
      betExpectationValue[i] += betExpectationValuefix[i]
    }
  }else{
  for (var i = 0; i < betExpectationValue.length; i++){
    betExpectationValue[i] -= betExpectationValuefix[i]
  };
}
  var z = document.getElementsByClassName("winBetAll");
  for(var  i = 0; i < z.length; i++){
    z[i].innerHTML = betExpectationValue[i];
}
  return;
};

function betFunc(x){  //Raise bet, plus x=true, minus x=false.
   if (x){ //Bet plus
     if(bet + 5 <= 100){
     bet += 5;
     winExpectationDisplay(x);
   }
   }else {
     if(bet - 5 != 0){ //Bet minus
          bet -= 5;
          winExpectationDisplay(x);
     }
   }
   document.querySelector("#spanBet").innerHTML= bet;
   return;
}

//-------------------------------------CARDS COLOR AND HELD -------------------------------
function cartiOnClick(x,z){
  y = document.getElementById(x).style.background;
  if(y === "blue"){
    document.getElementById(x).style.background = "grey";
    document.getElementById(z).innerHTML= " ";
  }else{
  document.getElementById(x).style.background = "blue";
  document.getElementById(z).innerHTML= "H E L D";
  }
  return;
}
// ---------------------DECK --------------------------------------------
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function newDeck(x){
	var deck = new Array();
	for(var i = 0; i < suits.length; i++){
		for(var x = 0; x < values.length; x++){
			var card = {Value: values[x], Suit: suits[i]};
			deck.push(card);
		}
	}
	return deck;
}

function shuffle(deck){
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 200; i++){
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];
		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
  return deck;
}

function flo(){
document.getElementById('test').innerHTML = deckShuffle.length;
document.getElementById('test2').innerHTML = deckShuffle.length;
}


// deal button -----------first 5 cards--------------------------------------------
var deck1 = newDeck();
var deckShuffle = shuffle(deck1);



function getCards(x){ // x este nr de carti dorite -----
    times = 0;
    valoare = 0;
    xx = [];
    while (times < x) {
      if (deckShuffle[0].Value === "A") {
         valoare = 1;
      }else if (deckShuffle[0].Value === "J") {
        valoare = 12;
      }else if (deckShuffle[0].Value === "Q") {
        valoare = 13;
      }else if (deckShuffle[0].Value === "K") {
        valoare = 14;
      }else {
        valoare = deckShuffle[0].Value;
      }
      xx.push([deckShuffle[0].Value,deckShuffle[0].Suit,valoare])
      deckShuffle.shift();
      times++;
    }
    return xx;
}

function clearHeld(){
  document.getElementById("idCard1").style.background = "grey";
  document.getElementById("held1").innerHTML= " ";
  document.getElementById("idCard2").style.background = "grey";
  document.getElementById("held2").innerHTML= " ";
  document.getElementById("idCard3").style.background = "grey";
  document.getElementById("held3").innerHTML= " ";
  document.getElementById("idCard4").style.background = "grey";
  document.getElementById("held4").innerHTML= " ";
  document.getElementById("idCard5").style.background = "grey";
  document.getElementById("held5").innerHTML= " ";
  return;
}

function checkSuits(x,cards){ // x este a cata carte din cele 5
  if (cards[x][1] === "hearts") {
    return "photo/suit_hard.png";
  }else if (cards[x][1] === "diamonds") {
    return "photo/suit_romb.png";
  }else if (cards[x][1] === "clubs") {
    return "photo/suit_clubs.png";
  }else {
    return "photo/suit_spade.png";
  }
};

function dealCardsScreen(){
    clearHeld();
    newCards = getCards(5);

    suit_card1 = checkSuits(0,newCards)//0 este a cata carte din cele 5 si new cards sunt cartile care trebuiesc verificate
    suit_card2 = checkSuits(1,newCards)
    suit_card3 = checkSuits(2,newCards)
    suit_card4 = checkSuits(3,newCards)
    suit_card5 = checkSuits(4,newCards)
    document.getElementById("idCardNumber1").innerHTML = newCards[0][0];
    document.getElementById("carte1").src= suit_card1;
    document.getElementById("carte1").style.setProperty("--gridArea","areaSuits");
    document.getElementById("idCardNumber2").innerHTML = newCards[1][0];
    document.getElementById("carte2").src= suit_card2;
    document.getElementById("carte2").style.setProperty("--gridArea","areaSuits");
    document.getElementById("idCardNumber3").innerHTML = newCards[2][0];
    document.getElementById("carte3").src= suit_card3;
    document.getElementById("carte3").style.setProperty("--gridArea","areaSuits");
    document.getElementById("idCardNumber4").innerHTML = newCards[3][0];
    document.getElementById("carte4").src= suit_card4;
    document.getElementById("carte4").style.setProperty("--gridArea","areaSuits");
    document.getElementById("idCardNumber5").innerHTML = newCards[4][0];
    document.getElementById("carte5").src= suit_card5;
    document.getElementById("carte5").style.setProperty("--gridArea","areaSuits");
    document.getElementById("deal").setAttribute("onclick" , "changeCards()");//we change deal button onclick to changeCards() function.

    //setTimeout(()=>{document.getElementById("carte1").src = "#";},10);
    //setTimeout(()=>{document.getElementById("carte2").src = "#";},400);
    //setTimeout(()=>{document.getElementById("carte3").src = "#";},800);
    //setTimeout(()=>{document.getElementById("carte4").src = "#";},1200);
    //setTimeout(()=>{document.getElementById("carte5").src = "#";},1600);
    return;
}
//----Deal button----------change cards----------------------------------------------
function changeCards(){
  if (document.getElementById("idCard1").style.background === "grey"){
      var anotherCard = getCards(1);
      var suitCard = checkSuits(0,anotherCard);
      document.getElementById("idCardNumber1").innerHTML = anotherCard[0][0];
      document.getElementById("carte1").src= suitCard;
      newCards[0] = anotherCard[0];
  }
  if (document.getElementById("idCard2").style.background === "grey"){
      var anotherCard = getCards(1);
      var suitCard = checkSuits(0,anotherCard);
      document.getElementById("idCardNumber2").innerHTML = anotherCard[0][0];
      document.getElementById("carte2").src= suitCard;
      newCards[1] = anotherCard[0];
  }
  if (document.getElementById("idCard3").style.background === "grey"){
      var anotherCard = getCards(1);
      var suitCard = checkSuits(0,anotherCard);
      document.getElementById("idCardNumber3").innerHTML = anotherCard[0][0];
      document.getElementById("carte3").src= suitCard;
      newCards[2] = anotherCard[0];
  }
  if (document.getElementById("idCard4").style.background === "grey"){
      var anotherCard = getCards(1);
      var suitCard = checkSuits(0,anotherCard);
      document.getElementById("idCardNumber4").innerHTML = anotherCard[0][0];
      document.getElementById("carte4").src= suitCard;
      newCards[3] = anotherCard[0];
  }
  if (document.getElementById("idCard5").style.background === "grey"){
      var anotherCard = getCards(1);
      var suitCard = checkSuits(0,anotherCard);
      document.getElementById("idCardNumber5").innerHTML = anotherCard[0][0];
      document.getElementById("carte5").src= suitCard;
      newCards[4] = anotherCard[0];
  }
  clearHeld();
  ifWin();
  return;

};

function ifWin(){
  var valueList = [];
  var suitsList = [];
  var suitsListTrue = true;
  for (i = 0; i < 5; i++){
    valueList.push(newCards[i][2]);
    suitsList.push(newCards[i][1]);
  }

  var sortList = valueList.sort(function(a,b){return a-b});
  sortListTrue = true;
  for (f = 0; f < 4; f++){
      if (parseInt(sortList[f])+1 != parseInt(sortList[f+1])) {
        sortListTrue = false;
      }
}

  for (z = 0; z < 4; z++){
      if (suitsList[z] != suitsList[z+1]) {
        suitsListTrue = false;
      }
}

document.getElementById("test2").innerHTML = parseInt(sortList[0])+1;
document.getElementById("idTextGirl").innerHTML = sortList[0+1];

  if (suitsListTrue === true) {
    document.getElementById("idTextGirl").innerHTML = "Flush!!!";
  }else if (sortListTrue === true) {
    document.getElementById("idTextGirl").innerHTML = "Straight!!!";
  }else if (sortList === "1,10,12,13,14" && suitsListTrue === true) {
      document.getElementById("idTextGirl").innerHTML = "WAW !!! Royal Flush";
  }
  return;
}


function flo(){

};
function flo2(){

};





function start(){//----------??????????????????----------------
  //temporar


}




//$(document).ready(function() { //JQUERY !!----------------------------------
    //$("#test").click(function(){
    //$().toggleClass("red");
    //})



//});
