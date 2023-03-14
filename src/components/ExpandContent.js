import { useState } from "react";

function ExpandContent( {data, id} ){
    const [ expanded, setIsExpanded ] = useState({});
    let content;
    // Function passes the posts ID to the setter function
    const handleExpand = (postId) => {
        // if the postId in the expanded state is false
        if (!expanded[postId]){
            // then spread prevExpanded states and set the current one to be true - handles show button
            setIsExpanded(prevExpanded => ({...prevExpanded, [postId]: true}))
        // otherwise spread the previous states and set them to false - handles hide button
        } else setIsExpanded(prevExpanded => ({...prevExpanded, [postId]: false}))
    }
    // then init. the expanded variable to the expanded state with the post's ID as a key
    const isExpanded = expanded[id];

    if (data.length > 500){
        // if isExpanded has a value
        if (isExpanded){
            // we want to initialize any posts with the true isExpanded variable to display
            return (content = <div className="p-2">
                <div className="overflow-auto whitespace-pre-wrap ">
                    {data}   
                </div>
                <button onClick={()=>handleExpand(id)} 
                    className="mt-1 font-light text-slate-500 hover:underline">
                    Hide
                </button>
            </div>)
        } else return content = <div className="p-2">
            <div className="truncate overflow-hidden h-20 whitespace-pre-wrap">
                {data}   
            </div>
            <button onClick={()=>handleExpand(id)} 
                className="mt-1 font-light text-slate-500 hover:underline">
                See more...
            </button>
        </div>
    // if the post is not longer than 500 characters, then render the post normally
    } else content = <div className="p-2">
        <div className="whitespace-pre-wrap">
            {data}   
        </div>
    </div>
    return content;
};

export default ExpandContent;