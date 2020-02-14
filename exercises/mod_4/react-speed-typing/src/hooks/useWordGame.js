import { useState, useEffect, useRef } from 'react';

const useWordGame = (startingTime = 10) => {
    const [text, setText] = useState('');
    const [timeRemaining, setTimeRemaining] = useState(startingTime);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const textBoxRef = useRef(null);
    
    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }
    
    const calculateWordCount = (text) => {
        const wordsArr = text.trim().split(' ');
        return wordsArr.filter(word => word !== '').length;
    }
    
    const startGame = () => {
        setIsTimeRunning(true);
        setTimeRemaining(startingTime);
        setText('');
        textBoxRef.current.disabled = false;
        textBoxRef.current.focus();
    }
    
    const endGame = () => {
        setIsTimeRunning(false);
        setWordCount(calculateWordCount(text));
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning]);
    
    return { textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, endGame, wordCount }
};

export default useWordGame;