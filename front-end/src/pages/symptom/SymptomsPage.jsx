import React from "react";
import TimeLineCard from "./TimeLineCard";

export default function SymptomsPage() {
  return (
    <div className="ml-4 mr-4">
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              2023.03.13
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <TimeLineCard />
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              2023.03.13
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <TimeLineCard />
          </div>
        </li>

        <li>
          <div className="flex-start flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-lisa-300 dark:bg-neutral-500"></div>
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              2023.03.13
            </p>
          </div>
          <div className="mt-2 ml-4 mb-6">
            <TimeLineCard />
          </div>
        </li>
      </ol>
    </div>
  );
}
