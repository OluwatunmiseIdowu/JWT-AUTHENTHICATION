"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatKoboAmountForDisplay = void 0;
const formatKoboAmountForDisplay = (amount) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(amount / 100);
};
exports.formatKoboAmountForDisplay = formatKoboAmountForDisplay;
