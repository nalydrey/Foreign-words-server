"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var Setting = exports.Setting = /** @class */ (function () {
    function Setting() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Setting.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Setting.prototype, "timer", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 4 }),
        __metadata("design:type", Number)
    ], Setting.prototype, "pause", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: 20 }),
        __metadata("design:type", Number)
    ], Setting.prototype, "lastWords", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return user_entity_1.User; }, function (user) { return user.settings; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_entity_1.User)
    ], Setting.prototype, "user", void 0);
    Setting = __decorate([
        (0, typeorm_1.Entity)()
    ], Setting);
    return Setting;
}());
