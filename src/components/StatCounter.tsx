"use client";

import CountUp from "react-countup";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix, label }: Props) {
  return (
    <div>
      <h3 className="text-5xl font-bold">
        <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce />
        {suffix}
      </h3>

      <p className="text-[var(--color-text-muted)] mt-2">{label}</p>
    </div>
  );
}
