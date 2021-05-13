import { TableCell, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { RowDataContext } from "./RowDataContext.jsx";

const RowComponent = () => {
  const tableborder = {
    padding: "10px",
    borderBottom: "2px solid #dddddd",
  };

  const [rowData, setRowData] = useContext(RowDataContext);

  return rowData.map(({ name, status, views, completion_rate }) => (
    <TableRow key={name}>
      <TableCell style={tableborder}>{name}</TableCell>
      <TableCell style={tableborder}>
        <font color={status === true ? "green" : "red"}>
          {status === true ? "Live" : "Inactive"}
        </font>
      </TableCell>
      <TableCell style={tableborder}>{views}</TableCell>
      <TableCell style={tableborder}>
        {Math.round(completion_rate * 100)}%
      </TableCell>
    </TableRow>
  ));
};

export default connect()(RowComponent);
