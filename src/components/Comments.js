import LoadingAnimation from "./LoadingAnimation";
import MonthConverter from "./MonthConverter";

function Comments ({ comments }) {
    if (comments.length !== 0){
        const renderedUserComments = comments.data.children.map((comment, i)=>{
            return <div key={i}>
                <div>{comment.data.link_title}</div>
                <div className="flex flex-row">Comment Date:<MonthConverter date={comment.data.created}/></div>
                <div>{comment.data.subreddit_name_prefixed}</div>
                <div className="whitespace-pre">{comment.data.body}</div>
                <div>{comment.data.link_url}</div>
            </div>
        })
        return <div>{renderedUserComments}</div>
    } else return <LoadingAnimation/>
};

export default Comments;