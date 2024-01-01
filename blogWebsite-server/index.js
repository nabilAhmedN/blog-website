const express = require("express");
const cors = require('cors');
const app = express();
const colors = require("colors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");


// database connection
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCATION);
    console.log(`Database connection is successful 🛢`.brightBlue.bold);
  } catch (error) {
    console.error(
      `Error connecting to the database: ${error.message}`.red.bold
    );
  }
};

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  connectToDB();
  console.log(`App is running on port ${port}`.brightBlue.bold);
});
