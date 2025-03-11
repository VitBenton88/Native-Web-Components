import React, { useState } from "react"
import RangeSlider from "../components/Range"

const RangeDemo: React.FC = (): React.ReactNode => {
  const [value, setValue] = useState(50)

  return (
    <>
      <article>
        <h2>Range input</h2>

        <RangeSlider
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          step={10}
        />
        <p>Selected Value: {value}</p>
      </article>
    </>
  )
}

export default RangeDemo