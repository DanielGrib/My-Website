import React, { useState, useEffect } from 'react';
import './Wordle.css';
import Guessingwords from '../words.json';

const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * Guessingwords.length);
  return Guessingwords[randomIndex];
};

const Wordle = () => {
  const [targetWord, setTargetWord] = useState(generateRandomWord());
  const [userInput, setUserInput] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [correctGuess, setCorrectGuess] = useState(false);
  const [guessCount, setGuessCount] = useState(0);

  useEffect(() => {
    if (guessCount === 6) {
      // End the game after 6 guesses
      alert(`You ran out of guesses. The correct word was ${targetWord}.`);
      setTargetWord(generateRandomWord());
      setGuesses([]);
      setCorrectGuess(false);
      setGuessCount(0);
    }
  }, [guessCount, targetWord]);

  const handleInputChange = (e) => {
    if (!correctGuess) {
      const sanitizedInput = e.target.value.replace(/[^A-Za-z]/g, '').toLowerCase();
      setUserInput(sanitizedInput);
    }
  };

  const handleGuess = () => {
    if (
      userInput &&
      userInput.length === targetWord.length &&
      !correctGuess &&
      guessCount < 6
    ) {
      const newGuesses = [...guesses, userInput];
      setGuesses(newGuesses);
      setUserInput('');
      setGuessCount(guessCount + 1);

      if (userInput === targetWord) {
        setCorrectGuess(true);
        setTimeout(() => {
          alert('You won!');
          setCorrectGuess(false);
          setTargetWord(generateRandomWord());
          setGuesses([]);
          setGuessCount(0);
        }, 0);
      }
    }
  };

  const getLetterClass = (userLetter, index, guessIndex) => {
    const userGuess = guesses[guessIndex] || '';
    if (userGuess[index] === targetWord[index]) //if the input letter matches the target letter (right letter, right place)
    {
      return 'correct';
    } else if (targetWord.includes(userGuess[index])) //if the input letter doesn't match place, but is in the target word
    {
      return 'correct-wrong-position';
    } else //if the input letter is just plain wrong
    {
      return '';
    }
  };


  return (
    <div className="Wordle">
      <h1>Wordle</h1>
      {guesses.map((guess, index) => (
        <div key={index}>
          <p>Guess {index + 1}:</p>
          <div>
            {targetWord.split('').map((letter, i) => (
              <span
                key={i}
                className={getLetterClass(letter, i, index)}
              >
                {guess[i] || '_'}
              </span>
            ))}
          </div>
        </div>
      ))}
      {!correctGuess && guessCount < 6 && (
        <>
          <p>Your Guess:</p>
          <div>
            {targetWord.split('').map((letter, index) => (
              <span
                key={index}
                className={getLetterClass(letter, index, guesses.length)}
              >
                {userInput[index] || '_'}
              </span>
            ))}
          </div>
          <input
            type="text"
            maxLength={targetWord.length}
            value={userInput}
            onChange={handleInputChange}
          />
          <br></br>
          <button onClick={handleGuess}>
            Guess
          </button>
        </>
      )}
    </div>
  );
};

export default Wordle;