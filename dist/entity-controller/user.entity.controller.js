"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepo = void 0;
var app_data_source_1 = require("../app-data-source");
var user_entity_1 = require("../entity/user.entity");
exports.userRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
