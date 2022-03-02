// Import express, mongoose and cors 
const express = require("express"); 
const mongoose = require("mongoose"); // for creating mongoose model (schema)
const cors = require("cors"); // enable cross origin request


const PORT =process.env.PORT || 3030;
// Initialize app
const app = express();

// Import router
const todoRoutes = require("./routes/todoRoutes");

// Mongoose 6 always behaves as if  useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false 
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

// Initialize express and  cross origin request
app.use(express.json());
app.use(cors());

// Connect application with real database from mongo db
const CONNECTION_URL =
  "mongodb://localhost/todolist";

//Connet to database (second parameter is opional but is used in order to avoid  warnings in the terminal fro previous verions)
mongoose.connect(CONNECTION_URL, connectionOptions)
// if connection is succesful we want to call app and show a msg in console that it is working
    .then(() => console.log("Connected successfully"))
      // if connection fails, show error msg
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
});