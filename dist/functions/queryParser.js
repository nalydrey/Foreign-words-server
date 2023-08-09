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
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryParser = void 0;
var queryParser = function (obj) {
    var empty = {
        find: {},
        service: {}
    };
    Object.entries(obj).forEach(function (elem) {
        var _a, _b, _c, _d;
        var val = elem[1];
        console.log(val);
        if (Array.isArray(val)) {
            val = val.map(function (elem) {
                if (isNaN(elem)) {
                    if (elem === 'true')
                        return true;
                    if (elem === 'false')
                        return false;
                }
                else {
                    return +elem;
                }
                return elem;
            });
        }
        if (isNaN(val)) {
            if (val === 'true')
                val = true;
            if (val === 'false')
                val = false;
        }
        else {
            val = +val;
        }
        if (elem[0].slice(0, 1) === '_') {
            var key = elem[0].split('_')[1];
            var splitObj = key.split('.');
            console.log('splitObj', splitObj);
            if (splitObj.length === 1) {
                console.log(1);
                empty.service[key] = val;
            }
            if (splitObj.length === 2) {
                console.log(11);
                var transit = (_a = {}, _a[splitObj[1]] = val, _a);
                empty.service[splitObj[0]] = __assign(__assign({}, empty.service[splitObj[0]]), transit);
            }
            if (splitObj.length === 3) {
                console.log(11);
                var transit = (_b = {}, _b[splitObj[2]] = val, _b);
                var transit2 = (_c = {}, _c[splitObj[1]] = transit, _c);
                empty.service[splitObj[0]] = __assign(__assign({}, empty.service[splitObj[0]]), transit2);
            }
        }
        else {
            var splitObj = elem[0].split('.');
            if (splitObj.length === 1) {
                empty.find[splitObj[0]] = val;
            }
            if (splitObj.length === 2) {
                var transit = (_d = {}, _d[splitObj[1]] = val, _d);
                empty.find[splitObj[0]] = __assign(__assign({}, empty.find[splitObj[0]]), transit);
            }
        }
    });
    return empty;
};
exports.queryParser = queryParser;
