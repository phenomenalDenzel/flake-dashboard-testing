import React, { useEffect, useRef } from "react";
import "./sandbox1.css";
import * as d3 from "d3";
const Sandbox = () => {
  const canvas = useRef(null);
  console.log(canvas);
  useEffect(() => {
    showCanvas();
  });

  const showCanvas = () => {
    const width = 600;
    const height = 400;

    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    const xvals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const yvals = [5, 6, 2, 7, 9, 1, 3, 4, 8, 3, 6, 7];
    const margin = {
      top: 40,
      bottom: 40,
      right: 60,
      left: 60,
    };
    const svg = d3
      .select(canvas.current)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${
          height + margin.top + margin.bottom
        }`
      )
      .attr("preserverAspectRatio", "xminYmin")
      .attr("width", width)
      .attr("height", height)
      .style("background", "beige");
    //   .style("padding", 30);

    const xscale = d3
      .scaleBand()
      .domain(months)
      .range([margin.left, width + margin.left]);
    const xAxis = d3.axisBottom(xscale);
    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${height})`)
      .selectAll("text")
      .attr("text-anchor", "start")
      .attr("transform", "rotate(45)")
      .attr("x", 10);

    const yscale = d3
      .scaleLinear()
      .domain([0, d3.max(yvals)])
      .range([height - margin.top, 0]);
    const yAxis = d3.axisLeft(yscale);
    svg
      .append("g")
      .call(yAxis)
      .attr("transform", `translate(${margin.left},${margin.top})`);
  };
  return (
    <div className="sandbox1">
      <div className="canvas" ref={canvas}></div>
    </div>
  );
};

export default Sandbox;
