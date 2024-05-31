const setTimer = (seconds: number) => {
  if (localStorage.getItem("timerSeconds") == null) {
    console.log("Вызвался");
    localStorage.setItem("timerSeconds", JSON.stringify(seconds));
  }
};

export default setTimer;
