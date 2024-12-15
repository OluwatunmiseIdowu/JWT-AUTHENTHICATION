export const formatKoboAmountForDisplay = (amount) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format(amount / 100);
};
//# sourceMappingURL=amount.util.js.map