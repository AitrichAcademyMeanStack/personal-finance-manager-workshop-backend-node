const express = require('express') // Importing Express
const expenseRoutes  = require("./Expense/Router.js") // Importing Expense Route
const incomeRoutes = require("./Income/Router.js") // Importing Income Routes
const NotFoundError = require("./Exceptions/NotFoundError.js") // Importing NotFoundError
const errorHandler = require("./middleware/errorHandler.js") // Importing global Error Handler
const app = express()
const PORT = 8080;

app.use(express.json()) // Defining middleware


app.use("/api/v1", expenseRoutes); // Defining routes for Expense
app.use("/api/v1", incomeRoutes) // Defininf routes for Income


// Handling unmatched URLs.
app.all("*", (req, res, next) => {
    const err = new NotFoundError(`Invalid URL : ${req.url} on the server!`);
    next(err);
  });

app.use(errorHandler); //Global custom error handling middleware

// Listening to the Server
app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))