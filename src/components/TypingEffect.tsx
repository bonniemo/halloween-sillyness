import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let typingTimeout: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        typingTimeout = setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    return () => {
      clearTimeout(typingTimeout); // Cleanup to avoid multiple executions or memory leaks
    };
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;
