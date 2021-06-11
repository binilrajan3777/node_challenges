let express = require("express");
let userRouter = require("./user");

const app = express();

app.use("/user/", userRouter);


module.exports = app;