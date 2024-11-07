const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const apiRouter = require("./routes/api.route");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

//api route navigation to handle all api requests
app.use("/api", apiRouter);
app.get("/check", (req, res) => {
  res.send("Server is Healthy");
});

app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
