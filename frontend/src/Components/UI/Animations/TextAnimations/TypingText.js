import React, { useEffect, useState } from 'react';
import './TypingText.css';

const TypingText = ({words}) => {

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  useEffect(() => {
    const interval = setInterval(() => {
      const word = words[wordIndex];

      if (direction === DIRECTION_FORWARDS) {
        setLetterIndex((prev) => prev + 1);

        if (letterIndex === word.length) {
          setDirection(DIRECTION_BACKWARDS);
          clearInterval(interval);
          setTimeout(() => {
            setLetterIndex(word.length);
            setDirection(DIRECTION_BACKWARDS);
          }, WORD_STAY_DELAY);
        }
      } else if (direction === DIRECTION_BACKWARDS) {
        setLetterIndex((prev) => prev - 1);

        if (letterIndex === 0) {
          setWordIndex((prev) => (prev + 1) % words.length);
          setLetterIndex(0);
          setDirection(DIRECTION_FORWARDS);
        }
      }

      setText(word.substring(0, letterIndex));
    }, LETTER_TYPE_DELAY);

    return () => clearInterval(interval);
  }, [direction, letterIndex, wordIndex]);

  return <span className="typing-text">{text}</span>;
};

export default TypingText;