import MonthConverter from './MonthConverter';
import LoadingAnimation from './LoadingAnimation';

function Posts({posts}){
    if (posts.length !== 0){
        const renderedPosts = posts.data.children.map( (post, i) => {
            return <div key={i}> 
                <div>{post.data.subreddit}</div>
                <div>{post.data.title}</div>
                <div className='flex flex-row'>
                    Post Date:<MonthConverter date={post.data.created}/>
                </div>
                <div className='flex flex-row'>
                    Last Edited:<MonthConverter date={post.data.edited}/>
                </div>
                <div className='whitespace-pre'>{post.data.selftext}</div>
                <div>{post.data.total_awards_received}</div>
                <div>{post.data.ups}</div>
                <div>{post.data.permalink}</div>
                <div>{post.data.url}</div>
            </div>
        })
        console.log(posts)

        return <div>{renderedPosts}</div> 
    } else return <LoadingAnimation/>
};

export default Posts;