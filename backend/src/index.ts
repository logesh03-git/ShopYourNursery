import express, { Request, Response } from "express";
import path from "path";
import "dotenv/config";
import cors from "cors";
import apiRouter from "./routes/api";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api", apiRouter);

app.listen(port, () => console.log("server is running"));
