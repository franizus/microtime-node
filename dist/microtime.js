"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microtime = void 0;
class Microtime {
    static now() {
        const hr_time = process.hrtime();
        return Number(Date.now() + String(hr_time[1]).slice(3, 6));
    }
}
exports.Microtime = Microtime;
