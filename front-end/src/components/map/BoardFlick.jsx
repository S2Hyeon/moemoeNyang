import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Panel from "../common/Panel";
import { PostCard } from "../PostCard";

export default function BoardFlick({ isHigh }) {
  const arr = Array.from({ length: 10 });
  return (
    <Flicking align="prev" circular={true}>
      {arr.map((e, i) => {
        return (
          <div className="w-full">
            <Panel key={i}>
              <div className="mx-auto w-4/5 ">
                <div className="">
                  <PostCard onBottom={true} />
                </div>
              </div>
            </Panel>
          </div>
        );
      })}
    </Flicking>
  );
}
