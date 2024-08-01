import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed, sound }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
        // Play sound effect
        if (sound) {
          sound.play();
        }
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, speed, sound]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
