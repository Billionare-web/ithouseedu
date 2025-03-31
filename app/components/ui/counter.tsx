import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 50); // 50 bosqichda yetib boradi

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50); // har 50ms da o‘sadi

    return () => clearInterval(interval);
  }, [target]);

  return (
    <h1 className="text-center text-3xl text-red-600 font-bold">
      +{count}
      {suffix}
    </h1>
  );
};

export default Counter;
