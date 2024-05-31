import { FC, useEffect, useRef, useState } from "react";

import styles from "./Timer.module.css";

const formatTime = (timer: number) => {
  let minutes: number | string = Math.floor(timer / 60);
  let seconds: number | string = Math.floor(timer - minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};

const Timer: FC = () => {
  const [countDown, setCountDown] = useState<number>(10);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let time = Number(localStorage.getItem("timerSeconds"));
    setCountDown(time);
  }, []);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((previous) => previous - 1);
      let time = Number(localStorage.getItem("timerSeconds"));
      if (time > 0) {
        localStorage.setItem("timerSeconds", JSON.stringify(time - 1));
      }
    }, 1000);
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (countDown <= 0 && timerId.current) {
      clearInterval(timerId.current);
      alert("Время кончилось!");
    }
  }, [countDown]);

  return <div className={styles.timer}>{formatTime(countDown)}</div>;
};

export default Timer;
