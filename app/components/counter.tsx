"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(
    (startTime: number, duration: number, end: number) => {
      const step = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // Ensure it runs only once
          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          animate(startTime, duration, end);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [end, animate]);

  return <span ref={ref}>+{count}</span>;
};

export default Counter;

// ---------------------- 2. Counter Component - Using setInterval ----------------------//

// "use client";

// import { useState, useEffect, useRef } from "react";

// const Counter = ({ end }: { end: number }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated.current) {
//           hasAnimated.current = true; // Ensure it runs only once
//           let start = 0;
//           const duration = 2000; // 2 seconds
//           const intervalTime = Math.max(duration / end, 10); // Adjust interval time

//           const counter = setInterval(() => {
//             start += 1;
//             setCount(start);
//             if (start >= end) clearInterval(counter);
//           }, intervalTime);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [end]);

//   return <span ref={ref}>+{count}</span>;
// };

// export default Counter;
