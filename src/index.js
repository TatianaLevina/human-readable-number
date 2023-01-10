module.exports = function toReadable(number) {

    let result = '';
    let numberMap1 = new Map([
        [1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"],
        [7, "seven"], [8, "eight"], [9, "nine"], [0, "zero"]
    ]);
    let numberMap2 = new Map([
        [11, "eleven"], [10, "ten"], [12, "twelve"], [13, "thirteen"], [14, "fourteen"],
        [15, "fifteen"], [16, "sixteen"], [17, "seventeen"], [18, "eighteen"], [19, "nineteen"]
    ]);
    let numberMap3 = new Map([
        [20, "twenty"], [30, "thirty"], [40, "forty"], [50, "fifty"], [60, "sixty"],
        [70, "seventy"], [80, "eighty"], [90, "ninety"]
    ]);

    if (number >= 0 && number <= 9) {
        result = numberMap1.get(number);
    }
    if (number >= 10 && number <= 19) {
        result = numberMap2.get(number);
    }
    if (number >= 20 && number <= 99) {
        const ones = number % 10;
        const tens = number - ones; //20?30?40...
        if (number % 10 === 0) {
            result = numberMap3.get(number);
        } else {
            result = numberMap3.get(tens) + ' ' + numberMap1.get(ones);
        }
    }
    if (number >= 100 && number <= 999) {
        const hundreds = Math.floor(number / 100);
        const spec_tens = number % 100;
        const ones = number % 100 % 10;
        if (number % 100 === 0) {
            result = numberMap1.get(hundreds) + ' hundred ';
        } else {
            if (spec_tens < 10) {
                result = numberMap1.get(hundreds) + ' hundred ' + numberMap1.get(ones);
            } else {
                if (spec_tens >= 10 && spec_tens <= 19) {
                    result = numberMap1.get(hundreds) + ' hundred ' + numberMap2.get(spec_tens);
                }
                if (spec_tens >= 20 && spec_tens <= 99) {
                    const tens1 = spec_tens - ones; //20?30?40...
                    if (spec_tens % 10 === 0) {
                        result = numberMap1.get(hundreds) + ' hundred ' + numberMap3.get(spec_tens);
                    } else {
                        result = numberMap1.get(hundreds) + ' hundred ' + numberMap3.get(tens1) + ' ' + numberMap1.get(ones);
                    }
                }
            }
        }

    }
    return result.trim();
};