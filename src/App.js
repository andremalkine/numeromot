import { useState } from "react";

import { generate } from "lib/util";
import styles from "./App.module.css";
import Legend from "components/Legend";
import Result from "components/Result";
import Entry from "components/Entry";

function App() {
  const [entry, setEntry] = useState("");

  return (
    <div className={styles.base}>
      <div className={styles.container}>
        <h1>NuméroMot</h1>
        <Legend />
        <Entry onSubmit={setEntry} />
        <Result result={entry} />
      </div>
    </div>
  );
}

export default App;
