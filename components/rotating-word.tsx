import { useEffect, useState } from "react";

export const RotatingWord = ({ words, interval = 2000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="transition-opacity duration-300">{words[index]}</span>
  );
};
