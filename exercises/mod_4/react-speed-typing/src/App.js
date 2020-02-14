import React from 'react';
import useWordGame from './hooks/useWordGame';

const App = () => {
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        endGame,
        wordCount
    } = useWordGame(15)
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={ textBoxRef }
                onChange={ handleChange }
                value={ text }
                disabled={ !isTimeRunning }
            />
            <h4>Time remaining: { timeRemaining }</h4>
            <button 
                onClick={ startGame }
                disabled={ isTimeRunning }
            >
                Start
            </button>
            <h4>Stop Timer</h4>
            <button 
                onClick={ endGame }
                disabled={ !isTimeRunning }
            >
                End
            </button>
            <h1>Word count: { wordCount }</h1>
        </div>
    );
};

export default App;