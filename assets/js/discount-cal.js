const calcBtn = document.getElementById("calcBtn");

function calculateDiscount(amount, discount) {
  const discountValue = (amount * discount) / 100;
  const finalPrice = amount - discountValue;
  return {
    discountValue: discountValue.toFixed(2),
    finalPrice: finalPrice.toFixed(2),
  };
}

function handleClick() {
  const amount = document.getElementById("amount").value;
  const discount = document.getElementById("discount").value;
  const result = document.getElementById("result");

  const { discountValue, finalPrice } = calculateDiscount(amount, discount);
  result.innerText =
    "You saved ₹" + discountValue + "." + " Final price is ₹" + finalPrice;
}

calcBtn.addEventListener("click", handleClick);
