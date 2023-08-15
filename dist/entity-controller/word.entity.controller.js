"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordRepo = void 0;
var app_data_source_1 = require("../app-data-source");
var words_entity_1 = require("../entity/words.entity");
exports.wordRepo = app_data_source_1.myDataSource.getRepository(words_entity_1.Word);
