import React from "react";

interface MeterProps {
  value: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
  label?: string;
}

const Meter: React.FC<MeterProps> = ({
  value,
  min = 0,
  max = 100,
  low,
  high,
  optimum,
  label = "Progress",
}) => {
  return (
    <>
      {label && <label>{label}</label>}
      <meter
        value={value}
        min={min}
        max={max}
        low={low}
        high={high}
        optimum={optimum}
      >
        {value}%
      </meter>
    </>
  );
};

export default Meter;