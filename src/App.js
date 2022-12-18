import Legend from "components/Legend";
import styles from "./App.module.css";
import Entry from "components/Entry";

function App() {
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <h1>NuméroMot</h1>
        <Legend />
        <Entry />
      </div>
    </div>
  );
}

export default App;
