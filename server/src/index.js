const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//routes handlers
const apiRouter = require("./routes/api.route");

const app = express();
const PORT = process.env.PORT || 3003;

//connection to database
connectDB();
//cors for handling cross origin requests
app.use(cors({ origin: process.env.FE, credentials: true }));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

//api route navigation to handle all api requests
app.use("/api", apiRouter);
app.get("/check", (req, res) => {
  console.log(req.cookies.auth_token);
  res.send("Server is Healthy");
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
