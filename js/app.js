// shared function

// 1. get element by ID with input filed value
function donateNowInputById(id) {
  const donateBdt = document.getElementById(id).value;
  const donateBdtNumber = parseFloat(donateBdt);
  return donateBdtNumber;
}

// 2. get element by ID with innerText value on an ID
function getElementByInnerTextById(id) {
  const donationMainBalance = document.getElementById(id).innerText;
  const donationMainBalanceNumber = parseFloat(donationMainBalance);
  return donationMainBalanceNumber;
}

// Global variable
const accountBalance = getElementByInnerTextById("account-balance");

// add donate now button event handeler
const donateNow1 = document.getElementById("donate-now-1");

// add event listere
donateNow1.addEventListener("click", function () {
  // get donation amount
  const donationAmountInput = donateNowInputById("donate-now-input-1");
  console.log(donationAmountInput);
  // increment donation balance
  const donationMainBalance = getElementByInnerTextById(
    "donation-main-balance"
  );
  const calculateDonateBlance = donationMainBalance + donationAmountInput;
  const balanceUpdate = document.getElementById("donation-main-balance");
  balanceUpdate.innerText = calculateDonateBlance;

  // account balance decriment
  const mainAccountBalance = accountBalance - donationAmountInput;
  const mainAccountBalanceUpdate = document.getElementById("account-balance");
  mainAccountBalanceUpdate.innerText = mainAccountBalance;
});
