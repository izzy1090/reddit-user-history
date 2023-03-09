function UserComments ({userComments}) {
    if (userComments.length !== 0){
        const renderedUserComments = userComments.data.children.map((comment, i)=>{
            return <div key={comment[i]}>
                <div>{comment.data.link_title}</div>
                <div>{comment.data.subreddit_name_prefixed}</div>
                <div>{comment.data.body}</div>
                <div>{comment.data.link_url}</div>
            </div>
        })
        return <div>{renderedUserComments}</div>
    }
    
    
    
    
    // return <div>
    //     {renderedUserComments}
    // </div>
};

export default UserComments;