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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.enterUser = exports.deleteUser = exports.createUser = exports.getUsers = exports.deleteAllUsers = void 0;
var app_data_source_1 = require("../app-data-source");
var user_entity_1 = require("../entity/user.entity");
var settings_1 = require("../entity/settings");
var deleteAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usersRepo, users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('deleteAllUsers');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                return [4 /*yield*/, usersRepo.manager.delete(user_entity_1.User, {})];
            case 2:
                users = _a.sent();
                res.send(users);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log('deleteAllUsers func error', error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deleteAllUsers = deleteAllUsers;
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usersRepo, users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getUsers');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                return [4 /*yield*/, usersRepo.find()];
            case 2:
                users = _a.sent();
                res.send(users);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.log('getUsers func error', error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nikName, password, user, settings, usersRepo, settingRepo, newUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('createUser');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                console.log(req.body);
                _a = req.body, nikName = _a.nikName, password = _a.password;
                user = new user_entity_1.User();
                settings = new settings_1.Setting();
                user.nikName = nikName;
                user.password = password;
                settings.user = user;
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                settingRepo = app_data_source_1.myDataSource.getRepository(settings_1.Setting);
                return [4 /*yield*/, usersRepo.save(user)];
            case 2:
                _b.sent();
                return [4 /*yield*/, settingRepo.save(settings)];
            case 3:
                _b.sent();
                return [4 /*yield*/, usersRepo.findOneBy({ id: user.id })];
            case 4:
                newUser = _b.sent();
                res.send({ user: newUser });
                return [3 /*break*/, 6];
            case 5:
                error_3 = _b.sent();
                console.log('createUser func error', error_3);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usersRepo, userReadyToDelete, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('deleteUser');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                console.log(+req.params.id);
                id = +req.params.id;
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                return [4 /*yield*/, usersRepo.findOneBy({ id: id })];
            case 2:
                userReadyToDelete = _a.sent();
                return [4 /*yield*/, usersRepo.remove(userReadyToDelete)];
            case 3:
                _a.sent();
                res.send(userReadyToDelete);
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                console.log('deleteUser func error', error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var enterUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nikName, password, user, usersRepo, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('enterUser');
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                console.log(req.query);
                _a = req.query, nikName = _a.nikName, password = _a.password;
                user = null;
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                if (!(typeof nikName === 'string' && typeof password === 'string')) return [3 /*break*/, 3];
                return [4 /*yield*/, usersRepo.findOneBy({ nikName: nikName, password: password })];
            case 2:
                user = _b.sent();
                _b.label = 3;
            case 3:
                console.log('user', user);
                res.send({ user: user });
                return [3 /*break*/, 5];
            case 4:
                error_5 = _b.sent();
                console.log('enterUser func error', error_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.enterUser = enterUser;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, usersRepo, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('getUser');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                id = +req.params.id;
                user = null;
                usersRepo = app_data_source_1.myDataSource.getRepository(user_entity_1.User);
                return [4 /*yield*/, usersRepo.findOneBy({ id: id })];
            case 2:
                user = _a.sent();
                console.log(user);
                res.send({ user: user });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log('getUser func error', error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
