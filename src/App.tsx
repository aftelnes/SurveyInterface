import Test from "./components/Test";

import styles from "./App.module.css";
import fillLocalStorage from "./tools/fillLocaltorage";

function App() {
  fillLocalStorage();
  return (
    <div className={styles.app}>
      <h2>Тестирование на Программиста</h2>
      <Test />
    </div>
  );
}

export default App;
