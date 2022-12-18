import React, { useState } from "react";

import { POS } from "lib/constants";
import styles from "./Legend.module.css";

const Legend = () => {
  const [showLegend, setShowLegend] = useState(true);

  return (
    <div className={styles.base}>
      {showLegend && (
        <>
          <ul className={styles.legend}>
            {Object.keys(POS).map((key, i) => (
              <li key={key}>
                {i} - {POS[key]}
              </li>
            ))}
          </ul>
          <p>Text will remain unchanged.</p>
        </>
      )}
      <button onClick={() => setShowLegend(!showLegend)}>
        {showLegend ? "Hide" : "Show"} Legend
      </button>
    </div>
  );
};

export default Legend;
