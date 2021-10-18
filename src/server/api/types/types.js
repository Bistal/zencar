const express = require("express");
const { requestAPI } = require("../../utils/requestAPI");
const { config } = require("../../utils/config");
const { apiUrl } = config;
const log = require("bunyan").createLogger({ name: "address" });
const data = require('../../data');

exports.setup = () => {
  const router = express.Router();

  router.get("/", async (req, res) => {
   
    let types = [];
    if(data && data().types) {
        types = data().types
    }

    res.send({result: types});
  });

  return router;
};
