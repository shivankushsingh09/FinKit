const calculateBtn = document.getElementById("calculateBtn");

function calculateRequiredSavings(total, months, current) {
  const remaining = total - current;
  const requiredSavingPerMonth = remaining / months;
  return requiredSavingPerMonth;
}

function handleButtonClick() {
  const totalInputElement = document.getElementById("total");
  const monthInputElement = document.getElementById("months");
  const currentInputElement = document.getElementById("current");
  const resultElement = document.getElementById("result");

  const total = totalInputElement.value;
  const month = monthInputElement.value;
  const current = currentInputElement.value;
  const requiredSavings = calculateRequiredSavings(total, month, current);

  resultElement.innerText =
    "You need to save Rs. " + requiredSavings + " per month.";
}

calculateBtn.addEventListener("click", handleButtonClick);
