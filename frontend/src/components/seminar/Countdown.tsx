import { useEffect, useState } from "react";

export default function Countdown() {
  const target = new Date("2026-08-01T10:00:00");

  const getTime = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-8 justify-center">
      <TimeBlock value={time.days} label="DAYS" />
      <TimeBlock value={time.hours} label="HOURS" />
      <TimeBlock value={time.minutes} label="MINUTES" />
      <TimeBlock value={time.seconds} label="SECONDS" />
    </div>
  );
}

function TimeBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <h2 className="font-bebas text-6xl text-cream">{value} </h2>
      <p className="font-inter text-xs tracking-[0.35em] text-cream uppercase">
        {label}
      </p>
    </div>
  );
}