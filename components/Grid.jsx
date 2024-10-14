import React from 'react';

const Grid = ({ guesses, currentGuess }) => {

    const emptyRows = Array.from({ length: 6 - guesses.length });


    return (
        <div className="grid">
            {guesses.length < 6 && (
                <div className="row current-guess">
                    {currentGuess.padEnd(5).split('').map((letter, i) => (
                        <div className="cell" key={i}>{letter}</div>
                    ))}
                </div>
            )}
            {emptyRows.map((_, i) => (
                <div className="row" key={`empty-${i}`}>
                    {[...Array(5)].map((_, j) => (
                        <div className="cell" key={j}></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Grid;