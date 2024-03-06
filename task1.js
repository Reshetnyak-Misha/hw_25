function countVowels(string) {
    let vowel = 'aeiouAEIOU';//подсмотрел, честно вряд ли бы сам додумался. Не мог понять как ему обьяснить, что нужны именно гласные
    let vowelCounter = 0;

    for (let char = 0; char < string.length; char++) {
        if (vowel.indexOf(string[char]) !== -1) {
            vowelCounter += 1;
        }
    }
    return vowelCounter;
}

console.log(countVowels('Hello World'));

