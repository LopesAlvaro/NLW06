import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json()); // Especificando que a request vai ser em json
app.use( router );

app.listen(3000, () => console.log("Server is running 🚀"));