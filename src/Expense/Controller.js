const expenseService = require("./Service.js");
const asyncHandler = require("../Utils/asyncHandler.js")


const addExpenditure = asyncHandler(async (req, res) => {
    const item = req.body;
    const newExpense = await expenseService.addExpense(item);
    res.status(201).json(newExpense);
  });

// Fetching Expenses
const getAllExpense = asyncHandler(async (req, res) => {
    const expenses = await expenseService.fetchExpense();
    res.status(200).json(expenses);
  });

 //Deleting Expense
 const deleteExpense = asyncHandler(async (req, res) => {
    const expenseId = req.params.expenseId;
    await expenseService.removeExpense(expenseId);
    res.status(200).json({ message: "Expense deleted successfully." });
  });


module.exports = { addExpenditure, getAllExpense, deleteExpense }; // Exporting functions
