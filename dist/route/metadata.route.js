"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var metadata_controller_1 = require("../controller/metadata.controller");
var route = (0, express_1.Router)();
route.put('/', metadata_controller_1.changeMetaData);
route.put('/:id', metadata_controller_1.changeStatus);
exports.default = route;
