import React from "react";
import styles from "../styles/CSSModules/TextAppear.module.css";

interface AnimatedTextProps {
  words: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words }) => {
  return (
    <h2 className={styles.animated_text}>
      {" "}
      {/* Updated this line */}
      {words.map((word, index) => (
        <span
          key={index}
          className={`${styles.word} ${styles[`animationDelay${index + 1}`]}`}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedText;
