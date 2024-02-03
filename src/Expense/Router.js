// Dependency injection
const Router = require("express"); // creating instance of  Express
const expenseController  = require("./Controller.js");
const router = Router(); // creating new router instance.

// Routes to the Expense Controller
router.post("/expense/", expenseController.addExpenditure);
router.get("/expense/", expenseController.getAllExpense);
router.delete("/expense/:expenseId", expenseController.deleteExpense);

module.exports =  router; // Exporting the router instance
