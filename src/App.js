
import React from "react";
import ReactDOM from "react-dom";

import "./index.css" 
import MapChart from "./MapChart";
import WorldChart from "./WorldChart";
import ReactTooltip from "react-tooltip";


function App() {
  const [content, setContent] = React.useState("");
    function aaa(a) {
          // console.log("xxx : " + a);
          setContent(a)
    }

  return (
      <div>
      <MapChart setTooltipContent={aaa} />
      <ReactTooltip>{content}</ReactTooltip>
      <WorldChart setTooltipContent={aaa} />
      {content}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
