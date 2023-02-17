import React, { useState } from "react";
import "./Hangman.css";
import HangmanDrawing from "./HangmanDrawing";

//Word list
const words = require("./wordList.json");
//Take a random word from list
const randomWord =
  words[Math.floor(Math.random() * words.length)].toUpperCase();

const Hangman = () => {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //Guess state
  const [correctGuesses, setCorrectGuesses] = useState([]);
  //Wrong guess state
  const [wrongGuesses, setWrongGuesses] = useState([]);
  //Masked word
  const maskedWord = randomWord
    .split("")
    .map((letter) => (correctGuesses.includes(letter) ? letter : "_"))
    .join(" ");

  //Check if press letter is correct
  const checkWord = (alphabet) => {
    //Right alphabet
    if (randomWord.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet]);
    }
    //Wrong alphabet
    else if (!randomWord.includes(alphabet)) {
      setWrongGuesses([...wrongGuesses, alphabet]);
      //Out of guesses
      if (wrongGuesses.length === 5) {
        alert(`You lose! The word is ${randomWord}`);
        window.location.reload();
      }
    }
  };
  return (
    <div id='hangman'>
      <HangmanDrawing props={wrongGuesses} />
      <p id='word'>{maskedWord}</p>
      <div id='keyboard'>
        {alphabets.map((alphabet, index) => (
          <button
            key={index}
            onClick={() => {
              checkWord(alphabet);
            }}
            className={`${
              correctGuesses.includes(alphabet)
                ? "correct"
                : wrongGuesses.includes(alphabet)
                ? "wrong"
                : ""
            }`}
          >
            {alphabet}
          </button>
        ))}
      </div>
      {/* all correct guesses */}
      {!maskedWord.includes("_") && (
        <script>
          function()
          {alert("You won!!!") && window.location.reload()}
        </script>
      )}
    </div>
  );
};

export default Hangman;
