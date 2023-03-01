/**
 * Created by SooMinKim on 2023-03-01
 */
'use strict'

class Calculator {
    constructor () {}

    /**
     * 모든 수를 더한 값을 반환한다.
     * @param  {...any} numbers 
     * @returns {number} This is the result
     */
    addition (...numbers) {
        return numbers.reduce((prev, cur) => prev + cur);
    }

    /**
     * 첫번째 파라미터에서 다음 파라미터들을 뺀 값을 반환한다.
     * @param  {...any} numbers 
     * @returns {number} This is the result
     */
    subtraction (...numbers) {
        return numbers.reduce((prev, cur) => prev - cur);
    }

    /**
     * 모든 수를 곱한 값을 반환한다.
     * @param  {...any} numbers 
     * @returns {number} This is the result
     */
    multiplication (...numbers) {
        return numbers.reduce((prev, cur) => prev * cur);
    }

    /**
     * 두번째 파라미터에서 다음 파라미터들을 나눈 값을 반환한다.
     * 소수점 자리는 첫번째 파라미터 값만큼 표기된다.
     * @param {number} decimalPoint 
     * @param  {...any} numbers 
     * @returns {number} This is the result
     */
    division (decimalPoint, ...numbers) {
        const number = numbers.reduce((prev, cur) => prev / cur);

        return Number(number.toFixed(decimalPoint));
    }
}

module.exports = Calculator;
