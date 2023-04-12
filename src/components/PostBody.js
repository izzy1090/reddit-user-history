import { useState } from "react";
import UrlParser from "./UrlParser";
import EmbeddedMedia from "./EmbeddedMedia";
import PostImages from "./PostImages";

function PostBody( { data, id } ){
    const [ expanded, setIsExpanded ] = useState({});
    
    if (data){
        const parser = new DOMParser();
        const cleanText = parser.parseFromString(data.selftext, 'text/html').body.textContent.replaceAll('&#x200B;', '');
        
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

        if (data.selftext.length > 500){
            // if isExpanded has a value
            if (isExpanded){
                // we want to initialize any posts with the true isExpanded variable to display
                return (content = <div className="pt-1 pb-1">
                    <div className="overflow-auto whitespace-pre-wrap ">
                        <PostImages children={cleanText}/>
                        <UrlParser children={cleanText}/>
                        <EmbeddedMedia media={data.url}/> 
                    </div>
                    <button onClick={()=>handleExpand(id)} 
                        className="mt-1 text-slate-500 text-xs font-semibold hover:underline">
                        Hide
                    </button>
                </div>)
            } else return content = <div className="relative pt-1 pb-1 h-[130px]">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="truncate overflow-hidden h-full whitespace-pre-wrap">
                        <PostImages children={cleanText}/>
                        <UrlParser children={cleanText}/>
                        <EmbeddedMedia media={data.url}/>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 text-left w-full h-[5px] 
                                pt-7 pb-4 bg-gradient-to-t from-white to-transparent">
                    <div className="pb-[9px]"/>
                    <button onClick={()=>handleExpand(id)} 
                        className="text-slate-500 text-xs font-semibold hover:underline">
                        See more...
                    </button>
                </div>
            </div>
        // otherwise render post normally
        } else content = <div className="pt-1 pb-1">
            <div className="whitespace-pre-wrap">
                <PostImages children={cleanText}/>
                <UrlParser children={cleanText}/>
                <EmbeddedMedia media={data.url}/>
            </div>
        </div>
        return content;
    }
};

export default PostBody;