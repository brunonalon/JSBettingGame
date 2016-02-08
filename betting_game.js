$(document).ready(function() {
  $("#wallet").text("100")
  
  $("#reset_play").click(function() {
    $("#wallet").text("100");
    
    $("#bet").val("");
    $("#guessNumber").val("");
    $("#computer_number").text(""); 
    $("#menssage").text("")
  });
  $("#button_play").click(function() {
        var wallet = Number($("#wallet").text());
        var menssage = ""
        var bet = Number($("#bet").val());
        var guessNumber = Number($("#guessNumber").val());
        if (wallet < 0 ||  wallet < bet){
          alert("You dont have more many!!!!")
          return 
        }
        if (bet > 0) {
          pla_betting(wallet,bet, guessNumber );
        } else{
          alert("You have to bet!!!!")
        }

       
  });
});

var pla_betting = function (wallet,bet, guessNumber){

  var randonNumber = Math.floor((Math.random() * 10) + 1);
  if (guessNumber == randonNumber) {
      wallet += bet;
      menssage = "Win";
    } else {
      if (Math.abs(randonNumber - guessNumber) == 1 ){
        menssage = "Tie";
      } else {
        wallet -= bet;
        menssage = "Lose";
      }
    }
    $("#wallet").text(wallet); 
    $("#computer_number").text(randonNumber); 
    $("#menssage").text(menssage); 
};

