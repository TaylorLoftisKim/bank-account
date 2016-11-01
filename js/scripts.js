//business logic
function Account(name,firstDeposit) {
debugger;
  this.newName = name;
  this.firstDeposit = firstDeposit;
}



Account.prototype.firstBal = function (blah) {
debugger;
  return this.firstDeposit
};

Account.prototype.balanceCalc = function (deposit) {
  return this.firstDeposit += deposit
};

//user logic
$(document).ready(function(){
  $("form#initialDeposit").submit(function(event){
    event.preventDefault();
debugger;
    var userName = $("input#name").val();
    var userInitialDeposit = parseInt($("input#initial").val());
    result = new Account(userName,userInitialDeposit);

    result.firstDeposit = result.firstBal(result);


    $("#currentStacks").show();
    $("#currentStacks").text(result.firstDeposit);

  });



  $("form#transactions").submit(function(event){
    event.preventDefault();
debugger;
    var userDeposit = parseInt($("input#deposit").val());
    var userWithdrawal = parseInt($("input#withdrawal").val());
    

    result.firstDeposit = result.balanceCalc(userDeposit);

    $("#currentStacks").show();
    $("#currentStacks").text(result.firstDeposit);





  });
});
