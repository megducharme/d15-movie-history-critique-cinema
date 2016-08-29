"use strict";

let firebase = require("firebase/app"),
    fb = require("./api-getter"),
    fbData = fb();

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.key,
  authDomain: fbData.authUrl
};

// console.log("config", config);

firebase.initializeApp(config);

module.exports = firebase;
