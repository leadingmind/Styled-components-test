import * as React from "react";
import "./styles.css";
import Block from "./components/Blocks";
import { Butt } from "./components/Sq";
import { Chart, Paper } from "./components/Chart";

const list = ["hello", "There", "Hey", "Jude"];
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Block></Block>
      <Butt>New</Butt>
      <Butt primary>Old</Butt> */}
      <Paper>
        {list.map(prop => (
          <Chart>{prop}</Chart>
        ))}
      </Paper>
    </div>
  );
}
