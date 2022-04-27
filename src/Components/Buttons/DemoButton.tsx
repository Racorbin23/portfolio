import React from "react";
import "./Button.css";

function DemoButton({ link }: { link: string }) {
  return (
    <div className="demo-button">
      <div
        onClick={() => {
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
