import React from "react";

export default React.forwardRef(({ children }, ref) => (
  <div ref={ref} className="panel">
    {children}
  </div>
));
