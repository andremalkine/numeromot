import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Result.module.css";

const Result = ({ result }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [copied]);
  const copy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
  };

  return (
    <div className={styles.base}>
      <h4 className={styles.heading}>
        <span>Result:</span>
        <button onClick={copy} disabled={!result}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </h4>
      <p className={styles.result}>
        {result || <span className={styles.empty}>Waiting for input...</span>}
      </p>
    </div>
  );
};

Result.propTypes = {
  entry: PropTypes.string,
};

export default Result;
