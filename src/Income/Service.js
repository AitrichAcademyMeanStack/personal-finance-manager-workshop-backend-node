const { logger } = require("../middleware/logger.js");

// Generate Unique Id
const generateUniqueID = () => {
    return Math.random().toString(2, 9);
  };
  
// Creating income object array
let incomes = [
  {
    id: generateUniqueID(),
    title: "Salary",
    amount: 95000,
    date: "2024-02-04",
    category: "Salary",
    description: "Developer Salary",
  },
  {
    id: generateUniqueID(),
    title: "Dividend",
    amount: 4000,
    date: "2024-02-04",
    category: "Stock",
    description: "Mutual Fund",
  },
  {
    id: generateUniqueID(),
    title: "Feelance",
    amount: 30000,
    date: "2024-01-29",
    category: "Salary",
    description: "Node.js Freelance",
  },
  {
    id: generateUniqueID(),
    title: "Gift",
    amount: 100,
    date: "2024-02-25",
    category: "Other",
    description: "Gift from Friend",
  },
  {
    id: generateUniqueID(),
    title: "Youtube",
    amount: 60000,
    date: "2024-01-15",
    category: "Salary",
    description: "Youtube Income",
  },
];

// Creating new object
const addIncome = async (income) => {
  try {
    income.id = generateUniqueID();
    incomes.push(income);
    logger.info("Income added successfully : ", income);
    return income;
  } catch (error) {
    throw error; // Throwing the error to controller
  }
};

// Fetching all Income Object
const getIncome = async () => {
  try {
    logger.info("List of Incomes: ", incomes)
    return incomes
  } catch (error) {
    throw error; // Throwing the error to controller
  }
}

// Deleting Income
const deleteIncome = async (incomeId) => {
  try {
    const incomeIndex = incomes.findIndex((income) => income.id === incomeId) // finding the index number
    if (incomeIndex !== -1) {
      const deleteIncome = incomes.splice(incomeIndex,1)  // Deleting the Income after fetching the index
      logger.info("Income Removed Successfully", deleteIncome)
      return true;
    } else {
      logger.info(`Income not found with specified ID : ${incomeId}`);
      return false;
    }
  } catch (error) {
    throw error; // Throwing the error to controller
  }
}


module.exports = {generateUniqueID , addIncome , getIncome , deleteIncome}
