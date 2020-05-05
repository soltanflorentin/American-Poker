
var bet = 5;

function betFunc(x){  //Raise bet, plus x=true, minus x=false.
   if (x){
     bet += 5;
   }else {
     if(bet - 5 != 0){
          bet -= 5;
     }
   }
   document.querySelector("#spanBet").innerHTML= bet;
   return;
}



function cartiOnClick(x){
  y = document.getElementById(x).style.background;
  if(y === "red"){
    document.getElementById(x).style.background = "blue";
  }else{
  document.getElementById(x).style.background = "red";
  }
  return;
}








function start(){
  document.querySelector("#spanBet").innerHTML= "flo";
}
