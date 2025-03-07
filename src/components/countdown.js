import { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, seHhour] = useState(0);
  const [day, setDay] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <h1>{count.toString().padStart(2, '0')}</h1>
    </div>
  );
};

export default Count;
