var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _verify;
import { decryptNumber } from '../../utils/crypto/decryptNumber';
import { checkNumberTyping } from '../../utils/checkIfNumber';
class Random {
    constructor(numbers) {
        _verify.set(this, (numbers) => {
            let result = [];
            for (let i = 0; i < numbers.length; i++) {
                if (checkNumberTyping(numbers[i]))
                    throw new Error('This constructor should only be used internally!');
                let decrypted = decryptNumber(numbers[i]);
                result.push(decrypted.toString());
            }
            return result.join('');
        });
        this.number = +__classPrivateFieldGet(this, _verify).call(this, numbers);
    }
}
_verify = new WeakMap();
export { Random };
