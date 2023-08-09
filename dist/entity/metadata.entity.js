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
exports.Metadata = void 0;
var typeorm_1 = require("typeorm");
var words_entity_1 = require("./words.entity");
var Metadata = exports.Metadata = /** @class */ (function () {
    function Metadata() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Metadata.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Metadata.prototype, "showCounter", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Metadata.prototype, "properlyCounter", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "needsToLearn", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Metadata.prototype, "isNew", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Metadata.prototype, "category", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return words_entity_1.Word; }, function (word) { return word.meta; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", words_entity_1.Word)
    ], Metadata.prototype, "word", void 0);
    Metadata = __decorate([
        (0, typeorm_1.Entity)()
    ], Metadata);
    return Metadata;
}());
