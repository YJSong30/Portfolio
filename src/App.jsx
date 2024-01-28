import styles from "./App.module.css";

import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Main />

      <About />
    </div>
  );
}

export default App;
