"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeInSecondsToHumanReadableFormat = void 0;
const convertTimeInSecondsToHumanReadableFormat = (time) => {
    return time <= 60 ? '1 minute' : `${Math.ceil(time / 60)} minutes`;
};
exports.convertTimeInSecondsToHumanReadableFormat = convertTimeInSecondsToHumanReadableFormat;
