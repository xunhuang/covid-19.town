import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const unemployment = require("./unemployment-by-county-2017.json");

const MapChart = (props) => {
    let setTooltipContent = props.setTooltipContent;
  let data = unemployment;

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.unemployment_rate))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  return (
    <ComposableMap data-tip="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.id === geo.id);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.unemployment_rate) : "#EEE"}

                onMouseEnter={() => {
                    const name = geo.properties.name;
                    // console.log(name);
                    setTooltipContent(name);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default React.memo(MapChart);

