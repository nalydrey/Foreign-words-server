"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app_data_source_1 = require("./app-data-source");
var cors_1 = __importDefault(require("cors"));
var index_route_1 = __importDefault(require("./route/index.route"));
var PORT = process.env.APP_PORT;
var funk = function () {
    app_data_source_1.myDataSource
        .initialize()
        .then(function () {
        console.log("Data Source has been initialized!!!");
    })
        .catch(function (err) {
        console.error("Error during Data Source initialization:", err);
    });
    app.listen(PORT, function () {
        console.log("server started on port ".concat(PORT));
    });
};
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', index_route_1.default);
funk();
