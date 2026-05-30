import React, { useState, useEffect } from 'react';

const AnimatedText = ({ texts, speed = 100, eraseSpeed = 50, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = texts[currentWordIndex];

    if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, eraseSpeed);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, speed);
    }

    // Handle state transitions
    if (!isDeleting && displayedText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayedText === '') {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, texts, speed, eraseSpeed, delay]);

  return (
    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      <span className="gradient-text">{displayedText}</span>
      <span
        style={{
          marginLeft: '4px',
          width: '3px',
          height: '1.2em',
          backgroundColor: 'var(--primary)',
          animation: 'cursor-blink 1s steps(2, start) infinite',
          display: 'inline-block'
        }}
      />
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </span>
  );
};

export default AnimatedText;
