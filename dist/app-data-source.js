"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv_1 = require("dotenv");
var user_entity_1 = require("./entity/user.entity");
var words_entity_1 = require("./entity/words.entity");
var metadata_entity_1 = require("./entity/metadata.entity");
var settings_1 = require("./entity/settings");
(0, dotenv_1.config)();
exports.myDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [user_entity_1.User, words_entity_1.Word, metadata_entity_1.Metadata, settings_1.Setting],
    logging: true,
    synchronize: true,
});
