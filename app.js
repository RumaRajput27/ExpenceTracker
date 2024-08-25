// Get references to DOM elements
const expenseForm = document.getElementById("expense-form");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseDescriptionSelect = document.getElementById("expense-description");
const expenseCategorySelect = document.getElementById("expense-category");
const expenseList = document.getElementById("expenses"); // Reference to the list where expenses will be displayed

// Handle form submission
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting the traditional way

  // Get the values from the inputs
  const amount = parseFloat(expenseAmountInput.value.trim());
  const description = expenseDescriptionSelect.value;
  const category = expenseCategorySelect.value;

  // Check if the inputs are valid
  if (amount && amount > 0 && description && category) {
    // Create a new list item for the expense
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `Amount: $${amount}, Description: ${description}, Category: ${category}`;

    // Append the new expense to the list
    expenseList.appendChild(expenseItem);

    // Reset the form after adding the expense
    expenseForm.reset();
  } else {
    console.error("Please fill out all fields correctly.");
  }
});
