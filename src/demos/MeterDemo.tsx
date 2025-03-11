import React, { useEffect, useState } from "react";
import Meter from "../components/Meter";

// Define a proper interface for the Battery API
interface BatteryManager {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener(type: string, listener: EventListener): void;
  removeEventListener(type: string, listener: EventListener): void;
}

// Extend Navigator interface to include getBattery method
interface NavigatorWithBattery extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

const MeterDemo: React.FC = () => {
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    // Check if Battery API is available and use proper type casting
    if ('getBattery' in navigator) {
      const nav = navigator as NavigatorWithBattery;

      nav.getBattery().then((battery) => {
        // Set initial battery level
        setBatteryLevel(Math.round(battery.level * 100));

        // Update battery level when it changes
        const handleLevelChange = () => {
          setBatteryLevel(Math.round(battery.level * 100));
        };

        battery.addEventListener("levelchange", handleLevelChange);

        // Clean up event listener on unmount
        return () => {
          battery.removeEventListener("levelchange", handleLevelChange);
        };
      })
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