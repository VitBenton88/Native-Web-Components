import React from "react"

export interface RangeProps {
  id?: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  showDatalist?: boolean;
  tickMarks?: number[]; // Custom tick marks (optional)
}

const RangeSlider: React.FC<RangeProps> = ({
  id = "range-slider",
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  showDatalist,
  tickMarks,
}) => {
  const datalistId = `${id}-datalist`

  // Generate evenly spaced tick marks if not explicitly provided
  const computedTickMarks = tickMarks ?? Array.from(
    { length: Math.floor((max - min) / step) + 1 },
    (_, i) => min + i * step
  )

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        list={showDatalist ? datalistId : undefined}
        data-testid='rangeInput'
      />
      {showDatalist && (
        <datalist id={datalistId} data-testid='datalist'>
          {computedTickMarks.map(tick => <option key={tick} value={tick} data-testid='dataOption' />)}
        </datalist>
      )}
    </>
  )
}

export default RangeSlider