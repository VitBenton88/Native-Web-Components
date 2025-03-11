import React from "react";
import Meter from "../components/Meter";

const MeterDemo: React.FC = (): React.ReactNode => {
  return (
    <article>
      <h2>Meters</h2>
      <Meter value={65} min={0} max={100} low={30} high={80} optimum={90} label="Battery Level" />
    </article>
  )
};

export default MeterDemo;