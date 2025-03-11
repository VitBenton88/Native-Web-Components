import React, { useEffect, useState } from "react";
import Meter from "../components/Meter";

const MeterDemo: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    if ((navigator as any).getBattery) {
      (navigator as any).getBattery().then((battery: any) => {
        setBatteryLevel(Math.round(battery.level * 100));

        // Update battery level when it changes
        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
      });
    }
  }, []);

  return (
    <article>
      <h2>Meters</h2>
      {
        batteryLevel !== null ? (
          <Meter id="battery" label="Device Battery Level" value={batteryLevel} min={0} max={100} />
        ) : (
          <Meter value={65} min={0} max={100} low={30} high={80} optimum={90} label="Mock Battery Level" />
        )
      }
    </article>
  )
};

export default MeterDemo;