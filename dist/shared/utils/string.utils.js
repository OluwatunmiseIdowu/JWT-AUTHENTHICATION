"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.extractFileNameFromPhotoUrl = void 0;
const extractFileNameFromPhotoUrl = (url) => {
    return ((url || '').split('/') || []).pop();
};
exports.extractFileNameFromPhotoUrl = extractFileNameFromPhotoUrl;
const capitalizeFirstLetter = (word) => {
    if (!word)
        return word;
    if (word.length === 1)
        return word.toLocaleUpperCase();
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
