"use client"

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Countdown() {
  // Set the end date for the countdown
  const countdownDate = new Date('2024-01-06T22:00:00Z').getTime();

  // State to keep track of time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Calculate the time left until the countdown date
  function calculateTimeLeft(): any {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // Calculate the width of the progress bar
  const progressWidth = () => {
    const totalSeconds = (countdownDate - new Date().getTime()) / 1000;
    const totalDuration = (countdownDate - new Date('2023-04-01T00:00:00Z').getTime()) / 1000;
    return `${(100 - (totalSeconds / totalDuration) * 100).toFixed(2)}%`;
  }

  return (
    <>
      <Card className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <CardHeader className="m-4 text-xl font-semibold">Time to migration Start</CardHeader>
        <CardContent className="m-4">
          <div className="text-center text-2xl md:text-6xl font-bold mb-4">
            {Object.keys(timeLeft).length ? `${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : 'Time is up!'}
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                style={{
                  width: progressWidth(),
                }}
              />
            </div>
          </div>
          <div className="flex justify-center"/>
        </CardContent>
      </Card>
    </>
  )
}
