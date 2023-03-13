import LoadingAnimation from "./LoadingAnimation";
import Panel from "./Panel";

function Comments ({ comments }) {
    if (comments.length !== 0){
        console.log(comments)
        const renderedUserComments = comments.data.children.map( (comment, i) => {
            return (
            <Panel key={i} className='text-sm'>
                <div className='border-b-2 border-slate-200 mb-1'>
                    <div className="flex flex-row items-center mb-3 text-xs pl-2">
                        <a target="_target" rel="noreferrer"
                            href={`https://www.reddit.com/user/${comment.data.author}`}
                            className="hover:underline text-user-link-color">
                                {comment.data.author}
                        </a>
                        <a target="_blank" rel="noreferrer" href={comment.data.link_url} 
                            className="flex flex-row font-light ml-1 text-slate-500">
                            commented on <span className="ml-1 hover:underline">
                                {comment.data.link_title}
                            </span>
                        </a>
                    </div>        
                </div>
                <div className="flex flex-row mt-2">
                    <div className="border-dashed border-r-2 border-slate-200 pl-1 mr-3"/>
                    <div className="whitespace-pre-wrap bg-comment-body-color 
                        p-3 rounded-md w-full h-full">
                        {comment.data.body}
                    </div>
                </div>
            </Panel>
        )})

        return <div>{renderedUserComments}</div>

    } else return <LoadingAnimation/>
    
};

export default Comments;