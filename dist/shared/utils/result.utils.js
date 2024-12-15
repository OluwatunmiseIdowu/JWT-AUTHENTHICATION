export class Result {
    isSuccess;
    isFailure;
    value;
    error;
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
//# sourceMappingURL=result.utils.js.map