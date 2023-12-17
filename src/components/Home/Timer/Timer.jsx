import StyleTimer from "./Timer.module.css";
import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const sound = "/audio/alarm-clock-short-6402.mp3";
  const up = "/images/upArrow.svg";
  const down = "/images/downArrow.svg";

  const increasingUpdatingHour = () => {
    if (hours === 23) {
      return;
    }
    setHours((hours) => hours + 1);
  };
  const increasingUpdatingMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((minutes) => minutes + 1);
  };
  const increasingUpdatingSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((seconds) => seconds + 1);
  };
  const decreasingUpdatingHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };
  const decreasingUpdatingMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((minutes) => minutes - 1);
  };
  const decreasingUpdatingSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((seconds) => seconds - 1);
  };

  const format = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  const toHoursAndMinutes = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
  };
  const play = () => {
    new Audio(sound).play();
  };

  return (
    <div className={StyleTimer.timerBody}>
      <div className={StyleTimer.countdown}>
        <div className={StyleTimer.timerCircle}></div>
        <CountdownCircleTimer
          key={completed ? "playing" : "stop"}
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={completed ? ["#fff"] : ["#FF6A6A"]}
          strokeWidth="7"
          rotation={"counterclockwise"}
          onComplete={() => {
            setPlaying(false);
            setCompleted(true);
            play();
          }}
        >
          {({ remainingTime }) => (
            <span className={StyleTimer.Time}>
              {completed ? "00:00:00" : toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className={StyleTimer.ClockContainer}>
        <div className={StyleTimer.TimerClock}>
          <div className={StyleTimer.count}>
            <p>Hours</p>
            <img src={up} onClick={increasingUpdatingHour} alt="Up" />
            <p>{format(hours)}</p>
            <img src={down} onClick={decreasingUpdatingHour} alt="Down" />
          </div>
          <h1>:</h1>
          <div className={StyleTimer.count}>
            <p>Minutes</p>
            <img src={up} onClick={increasingUpdatingMinute} alt="Up" />
            <p>{format(minutes)}</p>
            <img src={down} onClick={decreasingUpdatingMinute} alt="Down" />
          </div>
          <h1>:</h1>
          <div className={StyleTimer.count}>
            <p>Seconds</p>
            <img src={up} onClick={increasingUpdatingSecond} alt="Up" />
            <p>{format(seconds)}</p>
            <img src={down} onClick={decreasingUpdatingSecond} alt="Down" />
          </div>
        </div>
      </div>

      <button
        className={StyleTimer.StartStopReset}
        onClick={() => {
          if (completed) {
            setCompleted(false);
            setPlaying(false);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
          } else {
            setPlaying((play) => !play);
          }
        }}
      >
        {completed ? <p>Reset</p> : playing ? <p>Pause</p> : <p>Start</p>}
      </button>
    </div>
  );
};

export default Timer;
