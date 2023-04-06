import LoadingAnimation from "./Loading";
import Panel from "./Panel";
import { ReactComponent as CommentIcon } from "../public/images/comment-bubble-icon.svg";
import Dates from "./Dates";
import CommentBody from "./CommentBody";

function Comments ({ comments }) {
    if (comments.length !== 0){
        const renderedUserComments = comments.data.children.map( (comment) => {
            /* 
                !\[gif\]: matches the literal string ![gif]. Note we need to escape the brackets with backslashes
                (.*): captures any sequence of characters after ![gif]. 
                    The . matches any character except for a newline, and the * means "zero or more times".
                $: matches the end of the string. 
            */
            const regexGif = /!\[gif\](.*)$/
            if (regexGif){
                comment.data.body = comment.data.body.replace(regexGif, '')
            }
            return (
            <Panel key={comment.data.id} className='text-sm'>
                <div className='flex flex-row border-b-2 border-slate-200 
                    mb-1 text-slate-500'>
                    <div className="flex flex-row">
                        <CommentIcon className="fill-comment-bubble-color"/>
                        <Dates date={comment.data.created} classNames='ml-1 mr-1'/>
                    </div>
                    · 
                    <div className="mb-3 pl-1">
                         <a target="_target" rel="noreferrer"
                            href={`https://www.reddit.com/user/${comment.data.author}`}
                            className="hover:underline text-user-link-color">
                                {comment.data.author}
                        </a>
                        <a target="_blank" rel="noreferrer" href={comment.data.link_permalink} 
                            className="ml-1 ">
                            commented on <span className="hover:underline">
                                {comment.data.link_title}
                            </span> 
                        </a>
                    </div>        
                </div>
                <div className="flex flex-row mt-2">
                    <div className="border-dashed border-r-2 border-slate-200 ml-2 mr-3"/>
                    <div className="p-2 bg-comment-body-color rounded-md w-full h-full overflow-auto">
                        <CommentBody id={comment.data.id} data={comment.data}/>
                    </div>
                </div>
            </Panel>
        )})

        return <div>{renderedUserComments}</div>

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Comments;