import Homepage from "./components/Homepage";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import { React, useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState();

  let interval;

  const startTimer = () => {
    const mintDate = new Date("May 5, 2022 12:00:00").getTime();

    interval = setInterval(() => {
      let now = new Date().getTime();

      let distance = mintDate - now;

      let days = Math.floor(distance / (24 * 60 * 60 * 1000));
      if (days < 10) {
        days = "0" + days;
      }
      let hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      if (hours < 10) {
        hours = "0" + hours;
      }
      let mins = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      if (mins < 10) {
        mins = "0" + mins;
      }
      let secs = Math.floor((distance % (60 * 1000)) / 1000);
      if (secs < 10) {
        secs = "0" + secs;
      }
      let time = `${days} : ${hours} : ${mins} : ${secs}`;

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTime(time);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div>
      <ComingSoon time={time} />
    </div>
  );
}

export default App;
