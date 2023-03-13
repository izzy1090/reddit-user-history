import LoadingAnimation from "./LoadingAnimation";
import Panel from "./Panel";
import { ReactComponent as CommentIcon } from "../public/images/comment-bubble-icon.svg";
import DateConverter from "./DateConverter";
import { useState } from "react";

function Comments ({ comments }) {
    const [ expanded, setIsExpanded ] = useState({});

    const handleExpand = (postId) => {
        if (!expanded[postId]){
            setIsExpanded(prevExpanded => ({...prevExpanded, [postId]: true}))
        } else setIsExpanded(prevExpanded => ({...prevExpanded, [postId]: false}))
    }

    if (comments.length !== 0){
        console.log(comments)
        const renderedUserComments = comments.data.children.map( (comment) => {
            let commentBody;
            const isExpanded = expanded[comment.data.id]
            if (comment.data.body.length > 500){
                if (isExpanded){
                    commentBody = <>
                        <div className="whitespace-pre-wrap p-2">
                            {comment.data.body}   
                        </div>
                        <button onClick={()=>handleExpand(comment.data.id)} className="font-light text-slate-500 p-1 hover:underline">
                            Hide
                        </button>
                    </>
                } else commentBody = <>
                    <div className="truncate overflow-hidden h-20 whitespace-pre-wrap p-2">
                        {comment.data.body}   
                    </div>
                    <button onClick={()=>handleExpand(comment.data.id)} className="font-light text-slate-500 p-1 hover:underline">
                        See more...
                    </button>
                </>
            } else commentBody = <>
                <div className="whitespace-pre-wrap p-2">
                    {comment.data.body}   
                </div>
            </>
            return (
            <Panel key={comment.data.id} className='text-sm'>
                <div className='flex flex-row border-b-2 border-slate-200 mb-1'>
                    <CommentIcon className="fill-comment-bubble-color"/>
                    <DateConverter date={comment.data.created} classNames='text-xs text-slate-500 ml-1'/>
                    <div className="mb-3 text-xs pl-1 text-slate-500">
                        · <a target="_target" rel="noreferrer"
                            href={`https://www.reddit.com/user/${comment.data.author}`}
                            className="hover:underline text-user-link-color">
                                {comment.data.author}
                        </a>
                        <a target="_blank" rel="noreferrer" href={comment.data.link_url} 
                            className="font-light ml-1 ">
                            commented on <span className="hover:underline">
                                {comment.data.link_title}
                            </span> 
                        </a>
                    </div>        
                </div>
                <div className="flex flex-row mt-2">
                    <div className="border-dashed border-r-2 border-slate-200 ml-2 mr-3"/>
                    <div className="bg-comment-body-color rounded-md w-full h-full">
                        {commentBody}
                    </div>
                </div>
            </Panel>
        )})

        return <div>{renderedUserComments}</div>

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Comments;