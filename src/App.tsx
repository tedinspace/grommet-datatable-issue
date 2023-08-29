import React from "react";
import "./App.css";
import { ThemeType, Grommet } from "grommet";
import { GroupTable } from "./GroupedTable";
const theme: ThemeType = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  dataTable: {
    groupHeader: {
      background: "red"
    },
  },
};
function App() {
  return (
    <Grommet  full theme={theme}>
      <GroupTable />
    </Grommet>
  );
}

export default App;
