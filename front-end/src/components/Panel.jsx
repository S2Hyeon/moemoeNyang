import React from "react";
import ProfileRound from "./ProfileRound";

export default React.forwardRef(({ setTriggered }, ref) => (
  <div ref={ref} className="panel inline-block">
    <ProfileRound setTriggered={setTriggered} />
  </div>
));
