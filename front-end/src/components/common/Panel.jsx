import React from "react";
import ProfileRound from "../map/ProfileRound";

export default React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="panel">
    {children}
  </div>
));
