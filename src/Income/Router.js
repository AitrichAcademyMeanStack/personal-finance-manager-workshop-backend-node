// Dependency injection
const Router = require("express"); // creating instance of  Express
const incomeController  = require("./Controller.js");
const router = Router(); // creating new router instance.

// Routes to the Income Controller
router.post("/income/", incomeController.addRevenue);
router.get("/income/", incomeController.getAllRevenue);
router.delete("/income/:incomeId", incomeController.deleteRevenue);

module.exports =  router; // Exporting the router instance
