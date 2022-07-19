"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
function now() {
    const hr_time = process.hrtime();
    return Number(Date.now() + String(hr_time[1]).slice(3, 6));
}
exports.now = now;
