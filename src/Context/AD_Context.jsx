import React, { useState, createContext } from "react";

export const RowDataContext = createContext();

export const AD_DataProvider = (props) => {
  const [rowData, setRowData] = useState([
    {
      name: "Google Analytics Onboarding",
      status: false,
      views: 51,
      completion_rate: 0.2721,
    },
    {
      name: "How to install Google Analytics on your ...",
      status: true,
      views: 200,
      completion_rate: 0.6301,
    },
    {
      name: "UserTip Demo",
      status: true,
      views: 453,
      completion_rate: 0.5081,
    },
    {
      name: "How to build a walkthrough",
      status: true,
      views: 3357,
      completion_rate: 0.9174,
    },
    {
      name: "How to build Hovertips",
      status: true,
      views: 567,
      completion_rate: 0.7562,
    },
    {
      name: "How to create a post on LinkedIn",
      status: false,
      views: 67,
      completion_rate: 0.8722,
    },
    {
      name: "How to add a new connection on LinkedIn",
      status: true,
      views: 643,
      completion_rate: 0.8008,
    },
    {
      name: "How to expand your network on LinkedIn",
      status: false,
      views: 32,
      completion_rate: 0.2211,
    },
    {
      name: "How to manage your walkthroughs",
      status: true,
      views: 701,
      completion_rate: 0.9387,
    },
    {
      name: "How to add users to your organization",
      status: true,
      views: 407,
      completion_rate: 0.6425,
    },
  ]);

  const deleteRow = (name) => {
    setRowData(rowData.filter((row) => row.name !== name));
  };

  const addRow = (newRow) => {
    setRowData([...rowData, newRow]);
  };
  const providerValue = {
    rowData,
    setRowData,
    deleteRow,
    addRow,
  };
  return (
    <RowDataContext.Provider value={providerValue}>
      {props.children}
    </RowDataContext.Provider>
  );
};

// export const deleteRow = (rowKey) => {};
