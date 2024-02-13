"use client";

import { JSX, SVGProps } from "react";
import roadmapData from "./roadmapData.json"; // replace './roadmapData.json' with the actual path to your JSON file

export default function Roadmap() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Product Roadmap
              </div>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Our Vision for the Future
              </h2>
              <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;re excited to share what we&apos;re working on. Here are
                the features and improvements you can expect in the coming
                months.
              </p>
            </div>
          </div>
          {Object.entries(roadmapData).map(
            ([quarter, months], quarterIndex, quarterArray) =>
              Object.entries(months).map(
                ([monthOrCategory, achievements], monthIndex, monthArray) => (
                  <div
                    key={quarter + monthOrCategory}
                    className={`grid max-w-full grid-cols-2 items-start justify-between gap-4 border-t ${
                      quarterIndex === quarterArray.length - 1 &&
                      monthIndex === monthArray.length - 1
                        ? "border-b"
                        : ""
                    } border-gray-200 py-4 md:grid-cols-2 md:gap-6 md:py-8 dark:border-gray-800`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="font-bold">{monthOrCategory}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {quarter}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 text-sm">
                      {achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievement + achievementIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckIcon className="w-4 h-4 text-gray-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )
          )}
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
