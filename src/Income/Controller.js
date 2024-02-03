const incomeService = require("./Service.js");
const asyncHandler = require("../Utils/asyncHandler.js")


const addRevenue = asyncHandler(async (req, res) => {
    const item = req.body;
    const newIncome = await incomeService.addIncome(item);
    res.status(201).json(newIncome);
  });

// Fetching Income
const getAllRevenue = asyncHandler(async (req, res) => {
    const incomes = await incomeService.getIncome();
    res.status(200).json(incomes);
  });

 //Deleting Income
 const deleteRevenue = asyncHandler(async (req, res) => {
    const incomeId = req.params.incomeId;
    await incomeService.deleteIncome(incomeId);
    res.status(200).json({ message: "Income deleted successfully." });
  });


module.exports = { addRevenue, getAllRevenue, deleteRevenue }; // Exporting functions
