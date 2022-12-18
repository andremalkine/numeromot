import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Entry.module.css";

const Entry = ({ value, onChange }) => {
  return (
    <div className={styles.base}>
      <label htmlFor="entry" className={styles.label}>
        Enter Text:
      </label>
      <input id="entry" type="text" value={value} onChange={onChange} />
    </div>
  );
};

Entry.propTypes = {
  onChange: PropTypes.func,
};

export default Entry;
