const extractFileNameFromPhotoUrl = (url) => {
    return ((url || '').split('/') || []).pop();
};
const capitalizeFirstLetter = (word) => {
    if (!word)
        return word;
    if (word.length === 1)
        return word.toLocaleUpperCase();
    return word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase();
};
export { extractFileNameFromPhotoUrl, capitalizeFirstLetter };
//# sourceMappingURL=string.utils.js.map