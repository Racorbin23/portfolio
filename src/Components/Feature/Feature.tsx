import React from "react";
import "./Feature.css";

export default function Feature({ feature }: { feature: string }) {
  return <div className="project-feature">- {feature}</div>;
}
