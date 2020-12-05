let amount = document.getElementById('amount');
let tip = document.getElementById('tip');
let tipAmount = document.getElementById('tip-amount');
let amountValue = amount.value;
let tipValue = tip.value;
tipAmount.innerText = "Enter amount & tip";

amount.addEventListener('keyup', () => {
    amountValue = 0;
    amountValue = amount.value;
    calculateTip();
});

tip.addEventListener('keyup', () => {
    tipValue = 0;
    tipValue = tip.value;
    calculateTip();
});

function calculateTip() {
    if (amountValue > 0 && tipValue > 0) {
        tipAmount.innerText = `Tip amount is : ${parseFloat(amountValue * (tipValue / 100)).toFixed(2)}`;
    } else {
        tipAmount.innerText = "Enter amount & tip";
    }
}

function reset() {
    tipAmount.innerText = "Enter amount & tip";
    amount.value = "";
    tip.value = "";
}




