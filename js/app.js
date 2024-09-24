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

// 3. This function will calculation and update balance click by Donate Now Button
// this function fast parameter for input donate-now-input-1,2,3,4 etc
// this function second parameter for input donation-main-balance-2,3,4,5, etcs
function multiple(id1, id2) {
  const donationAmountInput = donateNowInputById(id1);
  console.log(donationAmountInput);

  //  input filed validation
  if (!isNaN(donationAmountInput && donationAmountInput > 0)) {
    //  Get donation balance
    const donationMainBalance = getElementByInnerTextById(id2);

    // account balance decriment
    const accountBalance = getElementByInnerTextById("account-balance");

    // main balance check
    if (accountBalance >= donationAmountInput) {
      // increment donation balance
      const calculateDonateBlance = donationMainBalance + donationAmountInput;
      const balanceUpdate = document.getElementById(id2);
      balanceUpdate.innerText = calculateDonateBlance;

      // decrement donation balance
      const mainAccountBalance = accountBalance - donationAmountInput;
      const mainAccountBalanceUpdate =
        document.getElementById("account-balance");
      mainAccountBalanceUpdate.innerText = mainAccountBalance;
      // clear input field
      document.getElementById(id1).value = "";
    } else {
      alert("This amount is not in balance");
    }
  } else {
    alert("Please type valid amount");
  }
}

// Donate Now 1 button add event lisetener
const donateNow1 = document.getElementById("donate-now-1");
// add event
donateNow1.addEventListener("click", function () {
  multiple("donate-now-input-1", "donation-main-balance-1");
});

// Donate Now 2 button add event lisetener
const donateNow2 = document.getElementById("donate-now-2");
// add evnt
donateNow2.addEventListener("click", function () {
  multiple("donate-now-input-2", "donation-main-balance-2");
});

// Donate Now 3 button add event lisetener
const donateNow3 = document.getElementById("donate-now-3");
// add event
donateNow3.addEventListener("click", function () {
  multiple("donate-now-input-3", "donation-main-balance-3");

  // history list
  const donateAmount = document.getElementById('donate-now-input-3').value;
  const historyList = document.createElement('div');
  historyList.className = 'bg-white p-2 border rounded-2xl border-black';

  historyList.innerHTML = `
  <p>${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
  <p>${new Date().toLocaleDateString()}</p>
  
  `
  const historyContainer = document.getElementById('deposite-history');
  historyContainer.insertBefore(historyList, historyContainer.firstChild)
  
});


// history button toggle
const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function(){
  historyBtn.classList.add('btn', 'bg-primary', 'font-semibold', 'text-xl');
  
  const donateBtn = document.getElementById('donate-btn');
  donateBtn.classList.remove('bg-primary','btn' )

  document.getElementById('donation-option').classList.add('hidden')
  document.getElementById('history-section').classList.remove('hidden')
   
});

// Donate Button toggle
const donateBtn = document.getElementById('donate-btn');
donateBtn.addEventListener('click' ,function(){
  donateBtn.classList.add('btn', 'bg-primary', 'font-semibold', 'text-xl');
  historyBtn.classList.remove('btn','bg-primary')

  document.getElementById('donation-option').classList.remove('hidden')
  document.getElementById('history-section').classList.add('hidden')
});