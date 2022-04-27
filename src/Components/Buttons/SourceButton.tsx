import React from "react";

function SourceButton({ link }: { link: string }) {
  return (
    <div className="source-button">
      <span className="material-symbols-outlined">code</span>
      <div
        onClick={() => {
          console.log("Checking out the source!");
          // Redirect window to link
          window.open(link);
        }}
      >
        View Source
      </div>
    </div>
  );
}

export default SourceButton;
