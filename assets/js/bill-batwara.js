const splitBtn = document.getElementById("splitBtn");

function splitBill(total, people) {
  return (total / people).toFixed(2);
}

function handleSplitClick() {
  const total = document.getElementById("totalBill").value;
  const people = document.getElementById("numPeople").value;
  const resultElement = document.getElementById("result");

  const amountPerPerson = splitBill(total, people);
  resultElement.innerText = "Each person should pay ₹" + amountPerPerson;
}

splitBtn.addEventListener("click", handleSplitClick);
