var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _verify;
import { decryptNumber } from '../../utils/crypto/decryptNumber';
class Random {
    constructor(numbers) {
        _verify.set(this, (numbers) => {
            let result = decryptNumber(numbers);
            return result;
        });
        this.number = +__classPrivateFieldGet(this, _verify).call(this, numbers);
    }
}
_verify = new WeakMap();
export { Random };
