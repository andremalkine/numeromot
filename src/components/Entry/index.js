import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Entry.module.css";

const Entry = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const update = (e) => setValue(e.target.value);
  const submit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={styles.base}>
      <form onSubmit={submit}>
        <div className={styles.inputGroup}>
          <label htmlFor={styles.entry} className={styles.label}>
            Enter Text:
          </label>
          <input
            id={styles.entry}
            type="text"
            value={value}
            onChange={update}
            placeholder="eg. The 3 1 6 over the 3 1."
          />
        </div>
        <button type="submit" onClick={submit}>
          Generate
        </button>
      </form>
    </div>
  );
};

Entry.propTypes = {
  onSubmit: PropTypes.func,
};

export default Entry;
