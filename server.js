import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h3>Main page here</h3>");
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});

app.on("error", (err) => {
  console.log("Error occured:", err);
});
