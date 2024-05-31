import Test from "./components/Test";

import styles from "./App.module.css";
import fillLocalStorage from "./tools/fillLocaltorage";
import Timer from "./components/timer/Timer";
import setTimer from "./tools/setTimer";

function App() {
  fillLocalStorage();
  setTimer(900);
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h2>Тестирование на Программиста</h2>
        <Timer seconds={3600} />
      </div>
      <Test />
    </div>
  );
}

export default App;
