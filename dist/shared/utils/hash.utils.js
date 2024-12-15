import * as bcrypt from 'bcrypt';
const SALT_ROUNDS = 10;
export const bcryptHashString = async (text) => {
    return await bcrypt.hash(text, SALT_ROUNDS);
};
export const bcryptCompareHashedString = async (plainText, hashedText) => {
    return await bcrypt.compare(plainText, hashedText);
};
//# sourceMappingURL=hash.utils.js.map