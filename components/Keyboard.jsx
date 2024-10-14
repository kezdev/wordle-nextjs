import React from 'react';

const Keyboard = ({ onKeyPress }) => {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    return (
        <div className="keyboard">
            {keys.map((row, i) => (
                <div className="keyboard-row" key={i}>
                    {row.map((key) => (
                        <button key={key} onClick={() => onKeyPress(key)}>
                            {key}
                        </button>
                    ))}
                </div>
            ))}
            <div className="keyboard-row">
                <button className={'action'} onClick={() => onKeyPress('ENTER')}>ENTER</button>
                <button className={'action'} onClick={() => onKeyPress('DELETE')}>DELETE</button>
            </div>
        </div>
    );
};

export default Keyboard;