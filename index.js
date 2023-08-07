const express = require("express");

const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connnect");

const app = express();
const PORT = 8001;

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
