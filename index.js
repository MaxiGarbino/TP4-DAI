import express from "express";
import cors from "cors";
import { getAllProvinces, getProvinceById } from "./src/controllers/province-controller.js";

const app = express();
const port = 3000;
app.use(cors()); 
app.use(express.json()); 


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

app.get("/api/province", getAllProvinces);

app.get("/api/province/:id", getProvinceById);
