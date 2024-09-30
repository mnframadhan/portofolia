import { useState, useEffect } from 'react';

type TypeWriterProps = {
    text: string;
    speed?: number;
};

function useTypewriter(text : string, speed = 50) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [text, speed]);

    return displayText;
};

export const Typewriter = ({ text, speed } : TypeWriterProps) => {
    const displayText = useTypewriter(text, speed);
  
    return <h1>{displayText}</h1>;
  };