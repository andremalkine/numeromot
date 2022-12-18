import React from "react";
import PropTypes from "prop-types";

import styles from "./Result.module.css";

const Result = ({ result }) => {
  return (
    <div className={styles.base}>
      <h4>Result:</h4>
      <p className={styles.result}>{result || "nothing yet..."}</p>
    </div>
  );
};

Result.propTypes = {
  entry: PropTypes.string,
};

export default Result;
