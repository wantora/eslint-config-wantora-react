"use strict";

const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "config.yml");
module.exports = yaml.safeLoad(fs.readFileSync(filePath, "utf8"));
