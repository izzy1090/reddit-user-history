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

        const xScale = d3.scaleBand().domain(dummyData.map(val=>val.region)).range([0, drawWidth]).padding(.5);
        const axisBottom = d3.axisBottom(xScale);

        const yScale = d3.scaleLinear().domain([20, 0]).range([0, drawHeight]);
        const axisLeft = d3.axisLeft(yScale);

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

    return <svg width={chartWidth} height={chartHeight}>
        <g transform={`translate(${margin.left}, ${0})`} className='test-d3-bar'></g>
        <g transform={`translate(${margin.left}, ${drawHeight})`} ref={xAxis}></g>
        <g transform={`translate(${margin.left}, ${margin.top})`} ref={yAxis}></g>
    </svg>
};

export default D3Test;