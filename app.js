

// Express JS framework

const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');
const cors = require('cors');
const appconfig = require('./config/appconfig');
const indexRouter = require('./routes/index');
const apiRouter = require("./routes/api");

const app = express();
const http = require('http').Server(app);  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static(path.join(__dirname, '/public')));


const server = http.listen(process.env.DEV_APP_PORT, () => console.log(`Server Started on Port ${process.env.DEV_APP_PORT}`));
app.use("/", indexRouter);
app.use("/api/", apiRouter);