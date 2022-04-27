import React from "react";
import "./Button.css";

function DemoButton({ link }: { link: string }) {
  return (
    <div className="demo-button">
      <div
        onClick={() => {
          console.log("Checking out the demo!");
          // Redirect window to link
          window.open(link);
        }}
      >
        Live Demo
      </div>
      <span className="material-symbols-outlined">open_in_new</span>
    </div>
  );
}

export default DemoButton;
