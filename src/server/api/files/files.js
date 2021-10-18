const express = require("express");
const { requestAPI } = require("../../utils/requestAPI");
const { config } = require("../../utils/config");
const { apiUrl } = config;
const log = require("bunyan").createLogger({ name: "address" });
const data = require('../../data');

exports.setup = () => {
  const router = express.Router();

  router.get("/", async (req, res) => {

    let files = [];
    if(data && data().files) {
        files = data().files
    }

    res.send({result: files});
  });

  return router;
};
