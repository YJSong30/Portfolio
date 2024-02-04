import styles from "./App.module.css";

import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Main />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
