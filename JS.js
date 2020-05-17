
//---------------------------------WIN DYSPLAY ---------------------------------
var bet = 5;
var credit = 100;
var heldOn = false;
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
     if(bet + 5 <= 100 && bet+5 <= credit){
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
  if (heldOn){
      y = document.getElementById(x).style.background;
      if(y === "blue"){
        document.getElementById(x).style.background = "grey";
        document.getElementById(z).innerHTML= " ";
      }else{
      document.getElementById(x).style.background = "blue";
      document.getElementById(z).innerHTML= "H E L D";
      }
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

function startAgain(){
  heldOn = false;
  deck1 = newDeck();
  deckShuffle = shuffle(deck1);
  buttonsDisable("betDeal");//activam butoanele deal si bet si dezactivam collect, doubble, red si black
  backColor(backWinColor);//scoatem culoarea de la castig


  document.getElementById("carte1").style.setProperty("--gridArea","4/1/1/4");
  document.getElementById("carte1").src= "photo/backCard.jpg";
  document.getElementById("carte2").style.setProperty("--gridArea","4/1/1/4");
  document.getElementById("carte2").src= "photo/backCard.jpg";
  document.getElementById("carte3").style.setProperty("--gridArea","4/1/1/4");
  document.getElementById("carte3").src= "photo/backCard.jpg";
  document.getElementById("carte4").style.setProperty("--gridArea","4/1/1/4");
  document.getElementById("carte4").src= "photo/backCard.jpg";
  document.getElementById("carte5").style.setProperty("--gridArea","4/1/1/4");
  document.getElementById("carte5").src= "photo/backCard.jpg";
  $(".divDblCard").css("grid-template-rows","0% 100%");
  document.getElementById("dblCardPhoto").src= "photo/backCard.jpg";

  for (var i = 0; i < 5; i++) {//scoatem culoarea de la dublaj jackpot.
    levelsDbl[i].style.background = "white";
  }
  document.querySelector(".dblWinLevels").style.background = "grey";
  document.getElementById("idTextGirl").innerHTML = "Alege o miza si sa continuam!";
  document.getElementById("deal").setAttribute("onclick" , "dealCardsScreen()");//we change deal button onclick to dealCardsScreen() function.
  return;
}

function dealCardsScreen(){
    heldOn = true;
    buttonsDisable("deal");
    credit -= bet;
    document.getElementById("spanCredit").innerHTML = credit;

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
  heldOn = true;
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

function ifWin(){//----------------check if win------------------
  flo = document.getElementById("idCard5").style.background;
  document.getElementById("idTextGirl").innerHTML = flo; //temporar !!!!!!
  var valueList = [];
  var suitsList = [];

  for (i = 0; i < 5; i++){//-------suitsList & valueList--------
    valueList.push(newCards[i][2]);
    suitsList.push(newCards[i][1]);
  }

  var sortList = valueList.sort(function(a,b){return a-b});//--sort list

  var sortListStraight = [];
  for (var i = 0; i < 5; i++) {//--------sortListStraight----any number bigger than 10 is -1 value-------
      if (parseInt(sortList[i]) > 10){
         sortListStraight.push(parseInt(sortList[i])-1);
       }else {
         sortListStraight.push(parseInt(sortList[i]));
       }
  }
  var sortListTrue = true;//-------------------sortListTrue-------------------------
  for (f = 0; f < 4; f++){
      if (parseInt(sortListStraight[f])+1 != parseInt(sortListStraight[f+1])) {
        sortListTrue = false;
      }
}
  var suitsListTrue = true;//--------------suitsListTrue-----------------------------
  for (z = 0; z < 4; z++){
      if (suitsList[z] != suitsList[z+1]) {
        suitsListTrue = false;
      }
}
  var sortBigPairArray = [];//------------------over 10 sort cards array-----------
  for (q of sortList){
      if (parseInt(q) > 10) {
        sortBigPairArray.push(q);
      }else if (parseInt(q) === 1) {
        sortBigPairArray.push(q);
      }
}

document.getElementById("test").innerHTML = sortBigPairArray;

  if (sortList.toString() === "1,10,12,13,14" && suitsListTrue === true) {
    win = bet*250;
    document.getElementById("idTextGirl").innerHTML = `WAW !!! Royal Flush You win ${win}, Collect or Doubble?`;
    backWinColor = document.getElementsByClassName("backRoyal");
    backColor(backWinColor);
  }else if (sortListTrue === true && suitsListTrue === true) {
    win = bet*150;
    document.getElementById("idTextGirl").innerHTML = `WAW !!! Straight Flush You win ${win}, Collect or Doubble?`;
    backWinColor = document.getElementsByClassName("backStrFl");
    backColor(backWinColor);
  }else if (fourOfKind(sortList)) {
      win = bet*100;
      document.getElementById("idTextGirl").innerHTML = `WAW !!! 4 of a Kind You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("back4");
      backColor(backWinColor);
  }else if (fullHouse(sortList)) {
      win = bet*50;
      document.getElementById("idTextGirl").innerHTML = `Full House !! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("backFull");
      backColor(backWinColor);
  }else if (suitsListTrue === true) {
      win = bet*30;
      document.getElementById("idTextGirl").innerHTML = `Flush!!! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("backFlush");
      backColor(backWinColor);
    }else if (sortListTrue === true || sortListStraight.toString() === "1,10,11,12,13") {
      win = bet*20;
      document.getElementById("idTextGirl").innerHTML = `Straight!!! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("backStr");
      backColor(backWinColor);
  }else if (threeKinds(sortList)) {
      win = bet*10;
      document.getElementById("idTextGirl").innerHTML = `3 of a Kind !! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("back3");
      backColor(backWinColor);
  }else if (twoPair(sortList)) {
      win = bet*5;
      document.getElementById("idTextGirl").innerHTML = `2 pairs !! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("back2");
      backColor(backWinColor);
  }else if (bigPair(sortBigPairArray)) {
      win = bet*2;
      document.getElementById("idTextGirl").innerHTML = `Big pair !! You win ${win}, Collect or Doubble?`;
      backWinColor = document.getElementsByClassName("backPair");
      backColor(backWinColor);
  }
  return;
}

//-----------------------doubble or not--------------------------------------------
function doubbleOrNot(dbl){
    if(!dbl){
      credit += win;
      document.getElementById("spanCredit").innerHTML = credit;
      startAgain();//----------------start again------------------------------------
    }else {
      level = 0;
      document.querySelector(".dblWinLevels").style.background = "#ECECEC";
      buttonsDisable("collDbl");
    }
    return;
}

//------------------Red or black-----------------------------------
function redBlack(colorDbl){
    document.getElementById("idTextGirl").innerHTML = colorDbl;
    doubbleCard = getCards(1);
    suitDblCard = checkSuits(0,doubbleCard);
    winTrue = false;

    $(".divDblCard").css("grid-template-rows","25% 75%");
    document.getElementById("divNrDblCard").innerHTML = doubbleCard[0][0];
    document.getElementById("dblCardPhoto").src= suitDblCard;

    if (colorDbl === "red"){
      if (suitDblCard === "photo/suit_hard.png" || suitDblCard === "photo/suit_romb.png"){
        winTrue = true;
      }
    }else if (colorDbl === "black"){
      if (suitDblCard === "photo/suit_clubs.png" || suitDblCard === "photo/suit_spade.png"){
        winTrue = true;
      }
    }

    if (winTrue){
      levelsDbl = document.getElementsByClassName("levels");
      win *= 2;
      document.getElementById("idTextGirl").innerHTML = `Ai dublat!! Castig: ${win}, baga in casa sau incearca sa ghicesti urmatoarea culoare. `;
      if (level < 5){
        levelsDbl[level].style.background = "yellow";
        level++;
        setTimeout(()=>{$(".divDblCard").css("grid-template-rows","0% 100%"); document.getElementById("dblCardPhoto").src= "photo/backCard.jpg";},1200);
      }else{
          levelsDbl[5].style.background = "pink";
          document.getElementById("idTextGirl").innerHTML = "JACKPOT !!! Ai mai castigat 500 !!!";
          win += 500;
          credit += win;
          setTimeout(()=>{document.getElementById("spanCredit").innerHTML = credit; startAgain();},10000);
      }
    }else {
      document.getElementById("idTextGirl").innerHTML = "Ai pierdut!!";
      level = 0;
      win = 0;
      setTimeout(()=>{startAgain();},1500);
    }
    return;
}
//-------------------check win functions---------------------------

function fourOfKind(x){//-------------------4 of a kind-----------------------
  if (x[0] === x[1] && x[1] === x[2] && x[2] === x[3]) {
    return true;
  }
  if (x[1] === x[2] && x[2] === x[3] && x[3] === x[4]) {
    return true;
  }
  return false;
};

function fullHouse(x){//-----------------------fullhouse----------------------
  if (x[0] === x[1] && x[1] === x[2] && x[3] === x[4]) {
    return true;
  }
  if (x[0] === x[1] && x[2] === x[3] && x[3] === x[4]) {
    return true;
  }
  return false;
};

function threeKinds(x){//---------------------three of kind-------------------
  if (x[0] === x[1] && x[1] === x[2]) {
    return true;
  }
  if (x[1] === x[2] && x[2] === x[3]) {
    return true;
  }
  if (x[2] === x[3] && x[3] === x[4]) {
    return true;
  }
  return false;
};

function twoPair(x){//------------------------two pair------------------------
  if (x[0] === x[1] && x[2] === x[3]) {
    return true;
  }
  if (x[0] === x[1] && x[3] === x[4]) {
    return true;
  }
  if (x[1] === x[2] && x[3] === x[4]) {
    return true;
  }
  return false;
};

function bigPair(x){//--------------------check if one pair in big pairs array---------------

  if (x.length > 1) {
     for (var i = 0; i < x.length; i++) {
       if (x[i] === x[i+1]) {
         return true;
       }
     }
   }
   return false;
};

//----------------------------------if we win -------------------------------------
function backColor(x){
  if (x[0].style.background === "blue") {
    x[0].style.background = "lightblue";
    x[1].style.background = "pink";
  }else{
  x[0].style.background = "blue";
  x[1].style.background = "blue";
  document.getElementById("collect").disabled = false;
  document.getElementById("doubble").disabled = false;
  document.getElementById("deal").disabled = true;
  }
  return;
}

function buttonsDisable(whichButton){//----------buttons on off----------------
   if (whichButton === "betDeal"){//unblock deal bet+ bet-
     document.getElementById("betMinus").disabled = false;
     document.getElementById("betPlus").disabled = false;
     document.getElementById("deal").disabled = false;
     document.getElementById("doubble").disabled = true;
     document.getElementById("collect").disabled = true;
     document.getElementById("red").disabled = true;
     document.getElementById("black").disabled = true;

   }else if (whichButton === "deal") {
     document.getElementById("betMinus").disabled = true;
     document.getElementById("betPlus").disabled = true;
   }else if (whichButton === "collDbl") {
      document.getElementById("red").disabled = false;
      document.getElementById("black").disabled = false;
      document.getElementById("doubble").disabled = true;
   }else if (whichButton === "redBlack") {

   }

   return;
}




//$(document).ready(function() { //JQUERY !!----------------------------------
    //$("#test").click(function(){
    //$().toggleClass("red");
    //})



//});
