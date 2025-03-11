import React from "react";

interface MeterProps {
  value: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
  label?: string;
  id?: string; // Add an optional id for accessibility
}

const Meter: React.FC<MeterProps> = ({
  value,
  min = 0,
  max = 100,
  low,
  high,
  optimum,
  label = "Progress",
  id = "meter", // Default id if not provided
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <br />
      <meter
        id={id}
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