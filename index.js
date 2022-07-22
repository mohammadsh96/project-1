'use strict';
require('dotenv').config();
let PORT = process.env.PORT || 3000;
const server=require("./auth/server");
const {sequelize}=require("./auth/models/index");

sequelize.sync().then(() => {
        server.start(PORT);
    }).catch(console.error);
