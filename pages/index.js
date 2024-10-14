import Grid from "@/components/Grid";
import Keyboard from "@/components/Keyboard";
import {useEffect, useState} from "react";
import {checkGuess, getRandomWord} from "@/utils/helpers";

export default function Home() {

    const [targetWord, setTargetWord] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');

    useEffect(() => {
        setTargetWord(getRandomWord());
    }, []);

    const keyPressed = (key) => {
        if (key === 'ENTER') {
            if (currentGuess.length === 5) {
                const result = checkGuess(currentGuess, targetWord);
                setGuesses([...guesses, currentGuess.split('').map((letter, i) => ({
                    letter,
                    status: result[i],
                }))]);
                setCurrentGuess('');
            }
        } else if (key === 'DELETE') {
            setCurrentGuess(currentGuess.slice(0, -1));
        } else if (currentGuess.length < 5) {
            setCurrentGuess(currentGuess + key);
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();

            if (key === 'ENTER') {
                keyPressed('ENTER');
            } else if (key === 'BACKSPACE' || key === 'DELETE') {
                keyPressed('DELETE');
            } else if (/^[A-Z]$/.test(key) && key.length === 1) {
                keyPressed(key);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentGuess, guesses, targetWord]);
    return (
        <div className="game-container">
            <h1 className={'text-[42px] pb-2'}>🍕Foodle</h1>
            <Grid
                guesses={guesses}
                currentGuess={currentGuess}
            />
            <Keyboard onKeyPress={keyPressed}/>
        </div>
    );
}
