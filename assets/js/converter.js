function convertUsdtoInr(usd) {
  const conversionRate = 82.5;
  const inr = usd * conversionRate;
  return inr.toFixed(2);
}

function calculateConversion() {
  const usdInputElement = document.getElementById("usdAmount");
  const resultElement = document.getElementById("result");
  const usdValue = usdInputElement.value;
  const inrValue = convertUsdtoInr(usdValue);

  resultElement.innerText = usdValue + " USD equals INR " + inrValue;
}

const convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", calculateConversion);
