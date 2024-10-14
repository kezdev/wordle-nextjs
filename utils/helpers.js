import {WORDS} from "@/utils/words";

export function getRandomWord() {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    console.log(word);
    return word;
}

export function checkGuess(guess, targetWord) {
    const result = [];
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === targetWord[i]) {
            result.push('correct');
        } else if (targetWord.includes(guess[i])) {
            result.push('present');
        } else {
            result.push('absent');
        }
    }
    return result;
}