/**
 * Created by SooMinKim on 2023-03-01
 */
'use strict'

class Calculator {
    constructor () {}

    /**
     * 모든 수를 더한 값을 반환한다.
     * @param  {...number} numbers 
     * @returns {number} This is the result
     */
    addition (...numbers) {
        return numbers.reduce((prev, cur) => prev + cur);
    }

    /**
     * 첫번째 파라미터에서 다음 파라미터들을 뺀 값을 반환한다.
     * @param  {...number} numbers 
     * @returns {number} This is the result
     */
    subtraction (...numbers) {
        return numbers.reduce((prev, cur) => prev - cur);
    }

    /**
     * 모든 수를 곱한 값을 반환한다.
     * @param  {...number} numbers 
     * @returns {number} This is the result
     */
    multiplication (...numbers) {
        return numbers.reduce((prev, cur) => prev * cur);
    }

    /**
     * 두번째 파라미터에서 다음 파라미터들을 나눈 값을 반환한다.
     * 소수점 자리는 첫번째 파라미터 값만큼 표기된다.
     * @param {number} decimalPoint 
     * @param  {...number} numbers 
     * @returns {number} This is the result
     */
    division (decimalPoint, ...numbers) {
        const number = numbers.reduce((prev, cur) => prev / cur);

        return Number(number.toFixed(decimalPoint));
    }

    /**
     * 1보다 큰 수에 대한 소수를 반환한다.
     * @param {number} number
     * @returns {Array[...number]} This is the result
     */
    primeNumber (number) {
        if (typeof number !== 'number') {
            throw new Error('Unmatched type');
        }

        let numbers = new Set();
        for (let i = 2 ; i <= number ; i++) {
            numbers.add(i);
        }

        const sqrt = Math.sqrt(number);
        for (let i = 2 ; i <= sqrt ; i++) {
            for (let j = i + i ; j <= number ; j += i) {
                numbers.delete(j);
            }
        }

        return [...numbers];
    }
    
    /**
     * 1보다 큰 작은 수와 큰 수 사이의 소수를 반환한다.
     * @param {number} smallNumber 
     * @param {number} bigNumber 
     * @returns {Array[...number]} This is the result
     */
    primeNumberBetween (smallNumber, bigNumber) {
        if (typeof smallNumber !== 'number' || typeof bigNumber !== 'number') {
            throw new Error('Unmatched type');
        }

        let numbers = new Set();
        for (let i = smallNumber ; i <= bigNumber ; i++) {
            numbers.add(i);
        }
        numbers.delete(1);

        const sqrt = Math.sqrt(bigNumber);
        for (let i = 2 ; i <= sqrt ; i++) {
            for (let j = i + i ; j <= bigNumber ; j += i) {
                numbers.delete(j);
            }
        }

        return [...numbers];
    }

    /**
     * D.R. Kaprekar의 셀프 넘버를 반환한다.
     * @param {number} number 
     * @returns {Array[...number]} This is the result
     */
    selfNumber (number) {
        if (typeof number !== 'number') {
            throw new Error('Unmatched type');
        }

        let numbers = new Set();
        for (let i = 1 ; i <= number ; i++) {
            let num = i;
            let stringNum = String(i);
            for (let j = 0 ; j < stringNum.length ; j++) {
                num += Number(stringNum[j]);
            }

            numbers.add(num);
        }

        let result = new Set();
        for (let i = 1 ; i <= number ; i++) {
            if (!numbers.has(i)) {
                result.add(i);
            }
        }

        return [...result];
    }

    
}

module.exports = Calculator;
