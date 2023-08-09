"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_1 = __importDefault(require("./user.route"));
var word_route_1 = __importDefault(require("./word.route"));
var metadata_route_1 = __importDefault(require("./metadata.route"));
var route = (0, express_1.Router)();
route.use('/users', user_route_1.default);
route.use('/words', word_route_1.default);
route.use('/meta', metadata_route_1.default);
exports.default = route;
