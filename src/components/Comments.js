import LoadingAnimation from "./LoadingAnimation";
import Panel from "./Panel";
import { ReactComponent as CommentIcon } from "../public/images/comment-bubble-icon.svg";
import DateConverter from "./DateConverter";
import ExpandContent from "./ExpandContent";

function Comments ({ comments }) {

    if (comments.length !== 0){
        console.log(comments)
        const renderedUserComments = comments.data.children.map( (comment) => {
            return (
            <Panel key={comment.data.id} className='text-sm'>
                <div className='flex flex-row border-b-2 border-slate-200 
                    mb-1 text-xs text-slate-500'>
                    <CommentIcon className="fill-comment-bubble-color"/>
                    <DateConverter date={comment.data.created} classNames='ml-1 mr-1'/>
                    · <div className="mb-3 pl-1">
                         <a target="_target" rel="noreferrer"
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
                        <ExpandContent data={comment.data.body} id={comment.data.id}/>
                    </div>
                </div>
            </Panel>
        )})

        return <div>{renderedUserComments}</div>

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Comments;