import * as d3 from 'd3';

const dummyData = [
    {id: 'd1', value: 10, region: 'USA'}, 
    {id: 'd2', value: 11, region: 'India'}, 
    {id: 'd3', value: 12, region: 'China'}, 
    {id: 'd4', value: 6, region: 'Germany'}
]

function D3Test(){
    const container = d3.select('div')
        .classed('text-xs')

    return container
};

export default D3Test;