"use strict";
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const bodyParser = require("body-parser");
const index = require("./api/index");
const { config } = require("./utils/config.js");
const { port, appURL } = config;

// using imports in our app
const app = express();
app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// route middlewares
app.use("/api", index.setup());

console.log("port ", port);
app.listen(port, () => console.log("Server - I am now running on port ", port));
