//variables/functions
function BankAccount (name, balance) {
  this.name = name;
  this.balance = balance;
}
BankAccount.prototype.deposit = function (balance, deposit) {
  balance += deposit;
  return balance;
}
BankAccount.prototype.withdraw = function (balance, withdraw) {
  balance -= withdraw;
  return balance;
}
function calculator (balance, deposit, withdraw) {
  
}
$(document).ready(function(){
  $("form#bank-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseFloat($("input#initial-deposit").val());
    var inputtedDeposit = parseFloat($("input#deposit").val());
    var inputtedWithdraw = parseFloat($("input#withdraw").val());

    var newBankAccount = new BankAccount (inputtedName, inputtedInitialDeposit);

    $("#current-balance").text(newBankAccount.balance.toFixed(2));
  });
});
