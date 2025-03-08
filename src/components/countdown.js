import { useState, useEffect } from "react";

const Countdown = ({ daysInput = 1 }) => {
  const [timeLeft, setTimeLeft] = useState(daysInput * 24 * 60 * 60 * 1000);

  useEffect(() => {
    setTimeLeft(daysInput * 24 * 60 * 60 * 1000);
  }, [daysInput]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime <= 1000 ? 0 : prevTime - 1000));
    }, 1000);

    return () => clearInterval(interval); 
  }, [timeLeft]); 

  const formatTime = (time) => {
    if (time <= 0) return { days: 0, hours: "00", minutes: "00", seconds: "00" };

    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = String(Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))).padStart(2, "0");
    const minutes = String(Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))).padStart(2, "0");
    const seconds = String(Math.floor((time % (60 * 1000)) / 1000)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      <h1>
        {days} jours, {hours}:{minutes}:{seconds}
      </h1>
      {timeLeft <= 0 && <p>Le compte à rebours est terminé !</p>}
    </div>
  );
};

export default Countdown;
