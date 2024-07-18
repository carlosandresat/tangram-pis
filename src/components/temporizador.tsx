"use client";

import { useState, useEffect } from "react";

export function Temporizador({ nivel, onTimeUpdate }: { nivel: number, onTimeUpdate: (time: number) => void }) {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTime(0);
  }, [nivel]);

  useEffect(() => {
    onTimeUpdate(time);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <h3 className="scroll-m-20 text-2xl tracking-tight">
      <span className="font-bold">Tiempo:</span> {minutes}min {seconds}s
    </h3>
  );
}
