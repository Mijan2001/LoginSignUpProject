const cors = require("cors");
const express = require("express");
const userRouter = require("./routes/app");
const app = express();
require("dotenv").config();
const port = process.env.port;

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
