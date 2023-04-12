import * as d3 from 'd3'; 
import { useEffect, useRef } from 'react';
import Panel from './Panel';

const margin = {
    top: 10,
    right: 10,
    bottom: 25,
    left: 60,
};

function D3Posts( { posts } ) {
    
    // Stores the x and y axis pieces of state in useRef via React. 
    // This prevents the xAxis and yAxis pieces of state from being rerendered each time.
    const xAxis = useRef();
    const yAxis = useRef();

    const chartWidth = 800;
    const chartHeight = 800;
    const drawWidth = chartWidth - margin.left - margin.right;
    const drawHeight = chartHeight - margin.top - margin.bottom;

    // const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    // This creates a format specifier via D3 to 
    const timeFormat = d3.timeFormat('%b %Y')
    // api request
    useEffect( () => {
        if (posts.length !== 0){
            // This iterates through the posts and sorts the returned posts by creation date
            // It also returns an object of arrays so that we can accumulate Months grouped together 
            const months = d3.group(posts.data.children.sort(
                (a, b) => { return a.data.created - b.data.created }), 
                // Then uses the timeFormat defined above to create dates for all the unix timestamps returned
                val => timeFormat(new Date(val.data.created * 1000)));
            let max = 0;
            /* 
                Then iterate over each month and check if max is greater than each month group.
                If it's not, then set the max to be the largest month group length. 
                We use max to set the yScale so the bar graph has a small buffer based on the data. 
            */
            months.forEach( month => max > month.length ? null : max = month.length )
            /* 
                This is for scale and axis prep. You can do this in conjunction with D3 Dom manipulation or not. 
                Converts your trimmed data for appropriate placement on the page later on. 
            */
            const xScale = d3.scaleBand().domain(months.keys()).range([0, drawWidth]).padding(.5);
            const axisBottom = d3.axisBottom(xScale);

            const yScale = d3.scaleLinear().domain([max + 1, 0]).range([0, drawHeight]);
            const axisLeft = d3.axisLeft(yScale).tickFormat((ticks)=> {
                if (Number.isInteger(ticks)) {
                    return ticks;
                } else return null;
            });

            /* 
                This is the DOM Manipulation step and where we bind data. 
                We're also proceeding through the enter, update, and exit part of the D3 process 
            */
            const bar = d3.select('.bar-graph').selectAll('rect').data(months);
            // Appends rectangles for each piece of data
            bar.enter().append('rect')
                .attr('class', 'bar')
                .attr('fill', 'orange')
                // Sets the width of each bar to be the width of xScale
                .attr('width', () => xScale.bandwidth())
                // Renders the displayed values for the xScale
                .attr('x', (renderedData) => xScale(renderedData[0]))
                .attr('y', () => yScale(0))
                .attr('height', () => 0)
                .transition()
                // Sets the delay so that the bar graphs transitions to it's resting place after a certain amount of time
                .delay((d, i) => i * 500)
                // Displays 
                .attr('y', (renderedData) => yScale(renderedData[1].length))
                .attr('height', (renderedData) => drawHeight - yScale(renderedData[1].length))
            // Finally exits the D3 binding process
            bar.exit().remove()
            // Then selects the yAxis and then renders it to the left axis
            d3.select(yAxis.current).call(axisLeft)
            d3.select(xAxis.current).call(axisBottom)
        }
    }, [drawHeight, drawWidth, posts, timeFormat]);

    /* 
        This is where we tell react to return SVGs with binded data from above.
        The SVG is the entire width and height of the graph.
        The child "g" elements or "group" elements are the individual. 
    */
    return <Panel>
        {/* This is where we tell the SVG to scale with the view box to allow the chart to be responsive. */}
        <svg preserveAspectRatio='xMinYMin meet' viewBox={`0 0 ${chartWidth} ${chartHeight}`}>    
            {/* This is where you're binding the D3 data to the g element and rendering it via React */}
            <g transform={`translate(${margin.left}, ${0})`} className='bar-graph'/>
            {/* Similar to the above, however this is specific to the xAxis labels */}
            <g transform={`translate(${margin.left}, ${drawHeight})`} ref={xAxis}/>
            {/* Sam eas above, however this is specific to the yAxis labels */}
            <g transform={`translate(${margin.left}, ${margin.top})`} ref={yAxis}/>
        </svg>
        <div className='text-reddit-orange text-sm text-center underline font-semibold'>
            Number Of Posts
        </div>
    </Panel>
};

export default D3Posts;