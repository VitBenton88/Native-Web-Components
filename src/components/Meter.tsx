import React from "react";

export interface MeterProps {
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
  label,
  id = "meter", // Default id if not provided
}) => {
  return (
    <>
      {label && <label htmlFor={id} data-testid='label'>{label}</label>}
      <br />
      <meter
        id={id}
        value={value}
        min={min}
        max={max}
        low={low}
        high={high}
        optimum={optimum}
        data-testid='meter'
      >
        {value}%
      </meter>
    </>
  );
};

export default Meter;