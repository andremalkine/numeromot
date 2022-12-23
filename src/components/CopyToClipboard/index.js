import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/* Copy To Clipboard */
const CopyToClipboard = ({ value }) => {
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
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  return (
    <button onClick={copy} disabled={!value}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

CopyToClipboard.propTypes = {
  value: PropTypes.string,
};

export default CopyToClipboard;
