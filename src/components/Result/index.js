import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Result.module.css";
import CopyToClipboard from "components/CopyToClipboard";
import { getPOS, parseEntry } from "lib/util";

const Result = ({ entry = "" }) => {
  const entrySet = parseEntry(entry);
  const result = entrySet.map((item, i) => (
    <ResultItem key={`${item.value}-${i}`} {...item} i={i} />
  ));

  const resultRef = useRef();

  return (
    <div className={styles.base}>
      <h4 className={styles.heading}>
        <span>Result:</span>
        <CopyToClipboard value={resultRef.current?.textContent || ""} />
      </h4>
      <p className={styles.result} ref={resultRef}>
        {result}
      </p>
    </div>
  );
};

Result.propTypes = {
  entry: PropTypes.string,
};

export default Result;

const ResultItem = ({ type, value, i }) => {
  const [word, setWord] = useState(getPOS(value, i));
  const shuffle = () => setWord(getPOS(value, i));
  switch (type) {
    case "pos":
      return (
        <button className={styles.word} onClick={shuffle}>
          {word}
        </button>
      );
    case "text":
    default:
      return <span>{value}</span>;
  }
};
