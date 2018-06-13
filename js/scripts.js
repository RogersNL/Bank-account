//variables/functions
var currentBalance = 0;
function BankAccount (name, balance) {
  this.name = name;
  this.balance = balance;
}
function register (initialDeposit) {
  if(currentBalance === 0) {
    currentBalance = initialDeposit;
  }
}
BankAccount.prototype.calculator = function (initialDeposit, deposit, withdraw) {
  if (!isNaN(deposit)) {
    this.balance += deposit;
  }
  if (!isNaN(withdraw)) {
    this.balance -= withdraw;
  }
    return this.balance
}

$(document).ready(function(){
  $("form#bank-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseFloat($("input#initial-deposit").val());
    var inputtedDeposit = parseFloat($("input#deposit").val());
    var inputtedWithdraw = parseFloat($("input#withdraw").val());

    register(inputtedInitialDeposit);

    var newBankAccount = new BankAccount (inputtedName, currentBalance);
    currentBalance = newBankAccount.calculator(inputtedInitialDeposit, inputtedDeposit, inputtedWithdraw);

    $("#current-balance").text("$" + currentBalance.toFixed(2));
    $("input#deposit").val("");
    $("input#withdraw").val("");
    $("input#initial-deposit").val("");
  });
});
