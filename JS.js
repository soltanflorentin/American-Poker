
var bet = 5;
var betExpectationValuefix = [1250, 750, 500, 250, 150, 100,50,25,10];
var betExpectationValue = [1250, 750, 500, 250, 150, 100,50,25,10];



function test(){
    document.getElementById("test2").innerHTML=z[1].innerHTML;
};

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

function cartiOnClick(x,z){
  y = document.getElementById(x).style.background;
  if(y === "red"){
    document.getElementById(x).style.background = "blue";
    document.getElementById(z).innerHTML= " ";
  }else{
  document.getElementById(x).style.background = "red";
  document.getElementById(z).innerHTML= "HELD";
  }
  return;
}





function start(){
  document.querySelector("#").innerHTML= "flo";
  //temporar
  document.getElementsByClassName("royal")[0].innerHTML=betExpectationValue[0],
  document.getElementsByClassName("straightflush").innerHTML=betExpectationValue[1];
  document.querySelectorAll(".careu").innerHTML=betExpectationValue[2];
  document.querySelector(".fullhouse").innerHTML=betExpectationValue[3];
  document.querySelector(".flush").innerHTML=betExpectationValue[4];
  document.querySelector(".straight").innerHTML=betExpectationValue[5];
  document.querySelector(".threeKinds").innerHTML=betExpectationValue[6];
  document.querySelector(".twoPairs").innerHTML=betExpectationValue[7];
  document.querySelector(".onePair").innerHTML=betExpectationValue[8];

}
