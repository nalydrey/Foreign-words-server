"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.changeMetaData = void 0;
var app_data_source_1 = require("../app-data-source");
var metadata_entity_1 = require("../entity/metadata.entity");
var typeorm_1 = require("typeorm");
var changeMetaData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, properlyMeta, wrongMeta, metaRepo, _b, goodMeta, a, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                console.log('changeMetaData');
                _c.label = 1;
            case 1:
                _c.trys.push([1, 9, , 10]);
                _a = req.body, properlyMeta = _a.properlyMeta, wrongMeta = _a.wrongMeta;
                console.log(req.body);
                metaRepo = app_data_source_1.myDataSource.getRepository(metadata_entity_1.Metadata);
                return [4 /*yield*/, metaRepo.increment({ id: (0, typeorm_1.In)(properlyMeta) }, 'properlyCounter', 1)];
            case 2:
                _c.sent();
                return [4 /*yield*/, metaRepo.increment({ id: (0, typeorm_1.In)(__spreadArray(__spreadArray([], wrongMeta, true), properlyMeta, true)) }, 'showCounter', 1)];
            case 3:
                _c.sent();
                _b = wrongMeta.length;
                if (!_b) return [3 /*break*/, 5];
                return [4 /*yield*/, metaRepo.update(wrongMeta, { properlyCounter: 0, needsToLearn: true })];
            case 4:
                _b = (_c.sent());
                _c.label = 5;
            case 5:
                _b;
                return [4 /*yield*/, metaRepo.findBy({
                        properlyCounter: (0, typeorm_1.MoreThan)(7)
                    })];
            case 6:
                goodMeta = _c.sent();
                return [4 /*yield*/, metaRepo.update(goodMeta.map(function (meta) { return meta.id; }), { needsToLearn: false, isNew: false })];
            case 7:
                _c.sent();
                return [4 /*yield*/, metaRepo.find()];
            case 8:
                a = _c.sent();
                res.send(a);
                return [3 /*break*/, 10];
            case 9:
                error_1 = _c.sent();
                console.log('changeMetaData error ', error_1);
                return [3 /*break*/, 10];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.changeMetaData = changeMetaData;
var changeStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, isNew, needsToLearn, metaRepo, newMeta, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('changeStatus');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                id = +req.params.id;
                _a = req.body, isNew = _a.isNew, needsToLearn = _a.needsToLearn;
                console.log(req.body);
                metaRepo = app_data_source_1.myDataSource.getRepository(metadata_entity_1.Metadata);
                return [4 /*yield*/, metaRepo.update(id, { isNew: isNew, needsToLearn: needsToLearn })];
            case 2:
                _b.sent();
                return [4 /*yield*/, metaRepo.findOneBy({ id: id })];
            case 3:
                newMeta = _b.sent();
                console.log({ metadata: newMeta });
                res.json({ metadata: newMeta });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                console.log('changeStatus error ', error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.changeStatus = changeStatus;
