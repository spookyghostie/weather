import React, { Component, PropTypes } from 'react'
import ReactFauxDOM from 'react-faux-dom'
import d3 from 'd3'

export default class WeatherForecastChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const dataset = this.props.data.map(datum => [datum.weekday, datum.temp])
    const chart = ReactFauxDOM.createElement('div')
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    var width
    if (viewportWidth < 400) {
      width = viewportWidth - 20
    } else {
      width = 400
    }
    const height = 180
    const padding = 30
    const barPadding = 1

    const xScale = d3.scale.ordinal()
                  .domain(dataset.map(datum => datum[0]))
                  .rangeRoundBands([0, width], 0.05)

    const yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset, datum => datum[1])])
                  .rangeRound([padding, height - padding])

    const svg = d3.select(chart)
      .append('svg')
      .attr("width", width)
      .attr("height", height)

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("width", width / dataset.length - barPadding)
      .attr("height", datum => yScale(datum[1]) - padding)
      .attr("x", (datum, idx) => idx * (width / dataset.length))
      .attr("y", datum => height - yScale(datum[1]))
      .attr("fill", d => "rgb(151, 183, 192)")

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(datum => datum[1] + ' \u00B0F')
      .attr("text-anchor", "middle")
      .attr("x", (datum, idx) =>
        idx * (width / dataset.length) + (width / dataset.length - barPadding) / 2)
      .attr("y", datum => height - yScale(datum[1]) + 14)
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white")

    svg.append("g")
      .attr("transform", "translate(0," + (height - padding) + ")")
      .call(d3.svg.axis()
      .scale(xScale)
      .orient("bottom"))

    return chart.toReact()
  }
}

WeatherForecastChart.propTypes = {
  data: PropTypes.array.isRequired
}