const { logger } = require("../middleware/logger.js");

// Generate Unique Id
const generateUniqueID = () => {
  return Math.random().toString(2, 9);
};

// Creating expense object array
let expenses = [
  {
    id: generateUniqueID(),
    title: "Electricity Bill",
    amount: 5000,
    date: "2024-02-04",
    category: "House",
    description: "January Month Bill",
  },
  {
    id: generateUniqueID(),
    title: "Fuel",
    amount: 90000,
    date: "2024-01-04",
    category: "Travelling",
    description: "All India Trip",
  },
  {
    id: generateUniqueID(),
    title: "Food",
    amount: 5000,
    date: "2024-01-20",
    category: "Food",
    description: "Dinner at Hayat",
  },
  {
    id: generateUniqueID(),
    title: "Milk",
    amount: 1037,
    date: "2024-02-01",
    category: "Food",
    description: "Daily Milk",
  },
  {
    id: generateUniqueID(),
    title: "Fees",
    amount: 45000,
    date: "2024-01-01",
    category: "Education",
    description: "Semester 1 Fees",
  },
];

// Creating new object
const addExpense = async (expense) => {
  try {
    expense.id = generateUniqueID();
    expenses.push(expense);
    logger.info("Expense added successfully : ", expense);
    return expense;
  } catch (error) {
    throw error; // Throwing the error to controller
  }
};

// Fetching all Expense Object
const fetchExpense = async () => {
  try {
    logger.info("List of Expense: ", expenses)
    return expenses
  } catch (error) {
    throw error; // Throwing the error to controller
  }
}

const removeExpense = async (expenseId) => {
  try {
    const expenseIndex = expenses.findIndex((expense) => expense.id === expenseId) // finding the index number
    if (expenseIndex !== -1) {
      const deleteExpense = expenses.splice(expenseIndex,1)  // Deleting the Expense after fetching the index
      logger.info("Expense Removed Successfully", deleteExpense)
      return true;
    } else {
      logger.info(`Expense not found with specified ID : ${expenseId}`);
      return false;
    }
  } catch (error) {
    throw error; // Throwing the error to controller
  }
}



module.exports = {generateUniqueID , addExpense , fetchExpense , removeExpense}
