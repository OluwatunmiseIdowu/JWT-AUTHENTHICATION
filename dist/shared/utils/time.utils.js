export const convertTimeInSecondsToHumanReadableFormat = (time) => {
    return time <= 60 ? '1 minute' : `${Math.ceil(time / 60)} minutes`;
};
//# sourceMappingURL=time.utils.js.map