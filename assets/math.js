/*
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org/>
*/

// 在全局定义常用的数学常数和函数，方便使用
// 修改了部分JS内置函数的具体实现

const PI = Math.PI; // 圆周率
const TAU = 2 * Math.PI; // 圆周率的两倍
const E = Math.E; // 自然对数的底数
const PHI = Math.sqrt(5) / 2 + 0.5; // 黄金比例
const ARGENT = Math.SQRT2 + 1;
const SQRT2 = Math.SQRT2; // 2的平方根
const SQRT3 = Math.sqrt(3); // 3的平方根

const sin = Math.sin; // 正弦函数
const cos = Math.cos; // 余弦函数
const tan = Math.tan; // 正切函数
const cot = (x) => 1 / Math.tan(x); // 余切函数
const sec = (x) => 1 / Math.cos(x); // 正割函数
const csc = (x) => 1 / Math.sin(x); // 余割函数

const asin = Math.asin; // 反正弦函数
const acos = Math.acos; // 反余弦函数
const atan = Math.atan; // 反正切函数

const atan2 = Math.atan2; // 反正切函数，考虑象限

const sinh = Math.sinh; // 双曲正弦函数
const cosh = Math.cosh; // 双曲余弦函数
const tanh = Math.tanh; // 双曲正切函数
const coth = (x) => 1 / Math.tanh(x); // 双曲余切函数
const sech = (x) => 1 / Math.cosh(x); // 双曲正割函数
const csch = (x) => 1 / Math.sinh(x); // 双曲余割函数

const asinh = Math.asinh; // 反双曲正弦函数
const acosh = Math.acosh; // 反双曲余弦函数
const atanh = Math.atanh; // 反双曲正切函数

const ln = Math.log; // 自然对数函数，改为歧义更少的函数名
const ln1p = Math.log1p; // 以e为底的对数函数，计算ln(1+x)
const log10 = Math.log10; // 以10为底的对数函数
const log2 = Math.log2; // 以2为底的对数函数

// 一般幂运算可使用**运算符，不需要定义pow函数
const exp = Math.exp; // 指数函数
const expm1 = Math.expm1; // 计算e^x - 1，避免精度损失
const sqrt = Math.sqrt; // 平方根函数
const cbrt = Math.cbrt; // 立方根函数

const abs = Math.abs; // 绝对值函数
const sgn = Math.sign; // 符号函数
const max = Math.max; // 求最大值函数
const min = Math.min; // 求最小值函数
const floor = Math.floor; // 向下取整函数
const ceil = Math.ceil; // 向上取整函数
const round = (x) => {
    if (Math.abs(x % 1) === 0.5) {
        return Math.round(x / 2) * 2; // 如果小数部分为0.5，则向最近的偶数取整
    } else {
        return Math.round(x);
    }
};

// 快速幂求斐波那契数列项，将phi**x表示为a+b*phi
const powPhi = (x) => {
    if (x < 0) {
        let [a, b] = powPhi(1 - x);
        return [(-1) ** x * -b, (-1) ** x * a];
    }
    let a = 1, b = 0;
    while (x) {
        if (x % 2) [a, b] = [b, a + b];
        x = Math.floor(x / 2);
        [a, b] = [a * a + b * b, 2 * a * b + b * b];
    }
    return [a, b];
}

const fib = (x) => powPhi(x)[1]; // 斐波那契数列项

const powArgent = (x) => {
    if (x < 0) {
        let [a, b] = powArgent(-x);
        return [(-1) ** x * b, (-1) ** x * -a];
    }
    let a = 1, b = 0;
    while (x) {
        if (x % 2) [a, b] = [a + 2 * b, a + b];
        x = Math.floor(x / 2);
        [a, b] = [a * a + b * b * 2, 2 * a * b];
    }
    return [a, b];
}

const eucAlg = (a, b) => {
    let xa = 1, ya = 0, xb = 0, yb = 1;
    if (a < 0) {
        [a, xa, ya] = [-a, -xa, -ya];
    }
    if (b < 0) {
        [b, xb, yb] = [-b, -xb, -yb];
    }
    while (b) {
        [xa, ya, xb, yb] = [xb, yb, xa - Math.trunc(a / b) * xb, ya - Math.trunc(a / b) * yb];
        [a, b] = [b, a % b];
    }
    return [a, xa, ya];
}

const gcd = (...args) => args.reduce((a, b) => eucAlg(a, b)[0], 1); // 最大公约数
const lcm = (...args) => args.reduce((a, b) => Math.abs(a) / eucAlg(a, b)[0] * Math.abs(b), 1); // 最小公倍数
