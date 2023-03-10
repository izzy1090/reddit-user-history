import DateConverter from './DateConverter';
import LoadingAnimation from './LoadingAnimation';
import Panel from './Panel';
import { useState } from 'react';

function Posts({posts}){
    const [ expanded, setExpanded ] = useState({});
    // this function passes the posts ID to the setter function
    const handleExpand = (postId) => {
        // when it gets passed to the setter function, it creates a prevExpanded state
        // each prevExpanded state gets spread so that as posts are expanded, other posts won't close
        // the setter function is also updating the postId key to an array and sets the value to be true
        setExpanded(prevExpanded => ({...prevExpanded, [postId]: true}));
    }

    if (posts.length !== 0){
        const renderedPosts = posts.data.children.map( (post, i) => {
            let selftextBody;
            // then init. the expanded variable to the expanded state with the post's ID as a key
            const isExpanded = expanded[post.data.id]
            if (post.data.selftext.length > 500){
                // if isExpanded has a value
                if (isExpanded){
                    // we want to initialize any posts with the true isExpanded variable to display
                    selftextBody = <>
                        <div className='whitespace-pre-wrap'>
                            {post.data.selftext}
                        </div>
                    </>
                } else {
                    // else we truncate the posts without the isExpanded and postID var to be true
                    selftextBody = <>
                        <div className='truncate overflow-hidden h-20 whitespace-pre-wrap'>
                            {post.data.selftext}
                        </div>
                        <button 
                            className='font-light text-slate-500 mt-2 hover:underline' 
                            onClick={()=> handleExpand(post.data.id)}>
                                See more...
                        </button>
                    </>
                }
                // if the post is not longer than 500 characters, then render the post normally
            } else selftextBody = <div className='whitespace-pre-wrap'>{post.data.selftext}</div>
            return (
            <Panel key={i} className={'text-sm'}> 
                <div className="flex flex-row items-center mb-1 text-xs">
                    <a target='_blank' 
                        rel="noreferrer" 
                        href={post.data.url} 
                        className='hover:underline'>
                        {post.data.subreddit_name_prefixed}
                    </a>
                    <div className='ml-1 flex flex-row font-light text-slate-500'>
                        · post by <span className='ml-1'>
                            <a target='_blank' 
                            rel='noreferrer' 
                            href={`https://www.reddit.com/user/${post.data.author}/`}
                            className='hover:underline'>
                                u/{post.data.author}
                            </a></span>
                        <span className='flex flex-row ml-1'>
                            on <DateConverter date={post.data.created}/>
                        </span>
                        <span className='flex flex-row ml-1'> 
                            · edited <DateConverter date={post.data.edited}/>
                        </span>
                    </div>
                </div>
                <div className='mb-1 text-base font-semibold'>
                    {post.data.title}
                </div>
                    {post.data.link_flair_text && <div className='mb-2' style={{
                        borderRadius: '2rem',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        display:'inline-block', 
                        backgroundColor: post.data.link_flair_background_color || 'orange',}}>
                    {post.data.link_flair_text} </div>}
                {selftextBody}
            </Panel>)
        })
        return <div className=''>{renderedPosts}</div> 
    } else return <LoadingAnimation/>
};

export default Posts;