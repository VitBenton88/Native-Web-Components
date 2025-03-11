import React from "react"
import Meter from "../components/Meter"

type MeterProps = {
  value: number;
  label: string;
}

const MeterDemo: React.FC = (): React.ReactNode => {
  const meterData: MeterProps[] = [
    { value: 25, label: "Low Level Meter" },
    { value: 50, label: "High Level Meter" },
    { value: 85, label: "Optimum Level Meter" },
  ]

  return (
    <article>
      <h2>Meters</h2>

      {meterData.map(({ value, label }, index) => (
        <div key={index}>
          <Meter value={value} min={0} max={100} low={30} high={80} optimum={90} label={label} />
          <br />
        </div>
      ))}
    </article >
  )
}

export default MeterDemo