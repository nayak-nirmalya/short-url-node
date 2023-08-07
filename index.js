const express = require("express");
require("dotenv").config();

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connnect");

const app = express();
const PORT = 8001;
const mongoDB_URL = process.env.MONGODB_URL;

connectToMongoDB(mongoDB_URL).then(() => console.log("MongoDB Connected."));

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
