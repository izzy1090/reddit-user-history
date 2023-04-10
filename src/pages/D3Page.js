import * as d3 from 'd3'; 
import { useEffect, useRef } from 'react';

const dummyData = [
    {id: 'd1', value: 10, region: 'USA'}, 
    {id: 'd2', value: 11, region: 'India'}, 
    {id: 'd3', value: 12, region: 'China'}, 
    {id: 'd4', value: 6, region: 'Germany'}
];

const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 60,
}

function D3Test( { refreshToken } ) {
    const xAxis = useRef();
    const yAxis = useRef();

    const chartWidth = 800;
    const chartHeight = 800;

    const drawWidth = chartWidth - margin.left - margin.right;
    const drawHeight = chartHeight - margin.top - margin.bottom;

    // api request
    useEffect(()=>{

        /* 
            This is for scale and axis prep. You can do this in conjunction with D3 Dom manipulation or not. 
            Converts your trimmed data for appropriate placement on the page later on. 
        */
        const xScale = d3.scaleBand().domain(dummyData.map(val=>val.region)).range([0, drawWidth]).padding(.5);
        const axisBottom = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear().domain([20, 0]).range([0, drawHeight]);
        const axisLeft = d3.axisLeft(yScale);

        // -------------------------------------------------
        // -------------------------------------------------
        // -------------------------------------------------
        // -------------------------------------------------
        // -------------------------------------------------

        // D3 DOM Manipulation step, this is data binding as well as the enter, update, and exit part of the D3 process
        const bar = d3.select('.test-d3-bar').selectAll('rect').data(dummyData);

        bar.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (data) => xScale(data.region))
            .attr('y', (data) => yScale(data.value))
            .attr('width', () => xScale.bandwidth())
            .attr('height', (data) => drawHeight - yScale(data.value))
            .attr('fill', 'black');
        bar.exit().remove()
        d3.select(yAxis.current).call(axisLeft)
        d3.select(xAxis.current).call(axisBottom)

    }, [drawHeight, drawWidth])

    // This is where we tell react to return SVGs with the binded data from above
    // The SVG is the entire width and height of the graph
        // The child "g" elements or "group" elements are the individual 
    return <svg preserveAspectRatio='xMinYMin meet' viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {/* This is where you're binding the D3 data to the g element and rendering it via React */}
        <g transform={`translate(${margin.left}, ${0})`} className='test-d3-bar'/>
        {/* Similar to the above, however this is specific to the xAxis labels */}
        <g transform={`translate(${margin.left}, ${drawHeight})`} ref={xAxis}/>
        {/* Sam eas above, however this is specific to the yAxis labels */}
        <g transform={`translate(${margin.left}, ${margin.top})`} ref={yAxis}/>
    </svg>
};

export default D3Test;