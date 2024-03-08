function findWord(sentence) {
    let words = sentence.split(" ");// Разбиваем на слова
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {//Проходим каждое слово
        if (words[i].length > longestWord.length) {
            longestWord = words[i];//Если нашли слово длиннее переназначаем
        }
    }

    return longestWord;
}

// Пример использования функции
console.log(findWord("The quick brown fox jumped over the lazy dog")); // Выводит "jumped"
