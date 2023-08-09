"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWord = exports.getWords = exports.editWord = exports.createWord = void 0;
var app_data_source_1 = require("../app-data-source");
var words_entity_1 = require("../entity/words.entity");
var user_entity_1 = require("../entity/user.entity");
var metadata_entity_1 = require("../entity/metadata.entity");
var queryParser_1 = require("../functions/queryParser");
var createWord = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, foreignText, translatedText, category, word, metadata, usersRepo, wordsRepo, metadataRepo, foundUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('createWord');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                console.log(req.body);
                _a = req.body, userId = _a.userId, foreignText = _a.foreignText, translatedText = _a.translatedText, category = _a.category;
                word = new words_entity_1.Word();
                metadata = new metadata_entity_1.Metadata();
                metadata.category = category;
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                wordsRepo = app_data_source_1.myDataSource.getRepository(words_entity_1.Word);
                metadataRepo = app_data_source_1.myDataSource.getRepository(metadata_entity_1.Metadata);
                return [4 /*yield*/, usersRepo.findOneBy({ id: userId })];
            case 2:
                foundUser = _b.sent();
                word.foreignText = foreignText;
                word.translatedText = translatedText;
                word.user = foundUser;
                word.meta = metadata;
                return [4 /*yield*/, metadataRepo.save(metadata)];
            case 3:
                _b.sent();
                return [4 /*yield*/, wordsRepo.save(word)];
            case 4:
                _b.sent();
                res.json({ word: word });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.log('createWord func error!', error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createWord = createWord;
var editWord = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, foreignText, translatedText, category, wordsRepo, word, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('editWord');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                id = +req.params.id;
                _a = req.body, foreignText = _a.foreignText, translatedText = _a.translatedText, category = _a.category;
                wordsRepo = app_data_source_1.myDataSource.getRepository(words_entity_1.Word);
                return [4 /*yield*/, wordsRepo.findOneBy({ id: id })];
            case 2:
                word = _b.sent();
                word.foreignText = foreignText || word.foreignText;
                word.translatedText = translatedText || word.translatedText;
                return [4 /*yield*/, wordsRepo.save(word)];
            case 3:
                _b.sent();
                res.send({ word: word });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.log('editWord func error!', error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.editWord = editWord;
var getWords = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, wordsRepo, words, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getWords');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                console.log(req.query);
                query = (0, queryParser_1.queryParser)(req.query);
                console.log(query);
                wordsRepo = app_data_source_1.myDataSource.getRepository(words_entity_1.Word);
                return [4 /*yield*/, wordsRepo.find(__assign({ where: __assign({}, query.find) }, query.service))];
            case 2:
                words = _a.sent();
                res.json({ words: words, query: query });
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.log('getWords func error ', error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getWords = getWords;
var deleteWord = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, wordsRepo, word, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('deleteWord');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                id = +req.params.id;
                console.log(id);
                wordsRepo = app_data_source_1.myDataSource.getRepository(words_entity_1.Word);
                return [4 /*yield*/, wordsRepo.findOneBy({ id: id })];
            case 2:
                word = _a.sent();
                wordsRepo.remove(word);
                res.send(word);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log('deleteWord func error', error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteWord = deleteWord;
