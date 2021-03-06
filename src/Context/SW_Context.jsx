import React, { useState, createContext } from "react";

export const SWContext = createContext();

export const SWProvider = (props) => {
  const [SwData, setSwData] = useState({
    id: "12345667",
    name: "How to create a Walkthrough",
    times_launched: 2923,
    unique_launch: 854,
    completion_rate: 0.4325,
    unique_completion_rate: 0.7206,
    dismissal_rate: 0.3711,
    incomplete_rate: 0.2006,
    errors_count: 67,
  });

  return (
    <SWContext.Provider value={[SwData, setSwData]}>
      {props.children}
    </SWContext.Provider>
  );
};
