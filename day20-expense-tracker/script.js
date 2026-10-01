// Select elements
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");
const clearBtn = document.getElementById("clearBtn");


// Store total expense
let total = 0;


// Update total expense
function updateTotal() {
    totalExpense.textContent = `$${total.toFixed(2)}`;
}


// Add expense
function addExpense() {

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);


    // Check input
    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense name and amount.");
        return;
    }


    // Create expense item
    const expenseItem = document.createElement("li");


    // Create expense name
    const nameElement = document.createElement("span");

    nameElement.textContent = name;

    nameElement.classList.add("expense-name");


    // Create expense amount
    const amountElement = document.createElement("span");

    amountElement.textContent = `$${amount.toFixed(2)}`;

    amountElement.classList.add("expense-amount");


    // Add elements to list item
    expenseItem.appendChild(nameElement);

    expenseItem.appendChild(amountElement);


    // Add item to expense list
    expenseList.appendChild(expenseItem);


    // Update total
    total += amount;

    updateTotal();


    // Clear inputs
    expenseName.value = "";
    expenseAmount.value = "";

    expenseName.focus();
}


// Add expense button
addBtn.addEventListener("click", addExpense);


// Add expense using Enter
expenseAmount.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        addExpense();
    }

});


// Clear all expenses
clearBtn.addEventListener("click", () => {

    expenseList.innerHTML = "";

    total = 0;

    updateTotal();

});