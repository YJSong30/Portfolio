import React from "react";

export const FixedIcon = () => {
  return (
    <div className={styles.fixedIcons}>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Your GitHub icon here */}
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Your LinkedIn icon here */}
      </a>
      <a href="mailto:your.email@example.com">{/* Your Mail icon here */}</a>
    </div>
  );
};
