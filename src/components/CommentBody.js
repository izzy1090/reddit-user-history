import { useState } from "react";
import UrlParser from "./UrlParser";
import EmbeddedMedia from "./EmbeddedMedia";
import PostImages from "./PostImages";
import GifParser from "./GifParser";

function CommentBody( { data, id } ){
    const [ expanded, setIsExpanded ] = useState({});
    
    if (data){
        const parser = new DOMParser();
        const cleanBody = parser.parseFromString(data.body, 'text/html').body.textContent.replaceAll('&#x200B;', '');
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

        if (data.body.length > 500){
            // if isExpanded has a value
            if (isExpanded){
                // we want to initialize any posts with the true isExpanded variable to display
                return (content = <div className="pt-1 pb-1">
                    <div className="overflow-auto whitespace-pre-wrap">
                        <GifParser gif={data.media_metadata}/>
                        <UrlParser children={cleanBody}/>
                        <PostImages children={cleanBody}/>
                        <EmbeddedMedia media={data.link_url}/> 
                    </div>
                    <button onClick={()=>handleExpand(id)} 
                        className="mt-1 text-slate-500 text-xs font-semibold hover:underline">
                        Hide
                    </button>
                </div>)
            } else return content = <div className="pt-1">
                <div className="truncate h-20 whitespace-pre-wrap">
                    <GifParser gif={data.media_metadata} gifDebug={data}/>
                    <UrlParser children={cleanBody}/>
                    <PostImages children={cleanBody}/>
                    <EmbeddedMedia media={data.link_url}/> 
                </div>
                <button onClick={()=>handleExpand(id)} 
                    className="mt-2 text-slate-500 text-xs font-semibold hover:underline">
                    See more...
                </button>
            </div>
        // otherwise render post normally
        } else content = <div className="pt-1 pb-1">
            <div className="whitespace-pre-wrap">
                <GifParser gif={data.media_metadata}/>
                <UrlParser children={cleanBody}/>
                <PostImages children={cleanBody}/>
                <EmbeddedMedia media={data.link_url}/>
            </div>
        </div>
        return content;
    }
};

export default CommentBody;