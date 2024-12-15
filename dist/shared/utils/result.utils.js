"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isSuccess, value, error) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.value = value;
        this.error = error;
        Object.freeze(this);
    }
    getValue() {
        return this.value;
    }
    static ok(value) {
        return new Result(true, value);
    }
    static err(error) {
        return new Result(false, null, error);
    }
}
exports.Result = Result;
