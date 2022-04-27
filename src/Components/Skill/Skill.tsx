import React from "react";
import "./Skill.css";

function Skill({ item }: { item: string }) {
  return <div className="skill-wrapper">{item}</div>;
}

export default Skill;
