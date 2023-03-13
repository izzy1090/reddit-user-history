import DateConverter from './DateConverter';
import LoadingAnimation from './LoadingAnimation';
import Panel from './Panel';
import { useState } from 'react';

function Posts({posts}){
    const [ expanded, setExpanded ] = useState({});
    // Function passes the posts ID to the setter function
    const handleExpand = (postId) => {
        /* When it's passed to the setter function, it creates a prevExpanded state
        each prevExpanded state gets spread so as posts expand, other posts stay open.
        Setter function also updates the postId key to an array and sets the value to be true */
        if (expanded[postId]){
            // this conditional handles closing a div
            setExpanded(prevExpanded=>({...prevExpanded, [postId]:false}))
        } else setExpanded(prevExpanded => ({...prevExpanded, [postId]: true}));
    }
    if (posts.length !== 0){
        const renderedPosts = posts.data.children.map( (post) => {
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
                        <button className='font-light text-slate-500 mt-2 hover:underline'
                            onClick={() => handleExpand(post.data.id)}>
                            Hide
                        </button>
                    </>
                } else {
                    // else we truncate the posts without the isExpanded and postID var to be true
                    selftextBody = <>
                        <div className='truncate overflow-hidden h-20 whitespace-pre-wrap'>
                            {post.data.selftext}
                        </div>
                        <button 
                            className='font-light text-slate-500 mt-2 hover:underline' 
                            onClick={() => handleExpand(post.data.id)}>
                                See more...
                        </button>
                    </>
                }
                // if the post is not longer than 500 characters, then render the post normally
            } else selftextBody = <div className='whitespace-pre-wrap'>{post.data.selftext}</div>
            return (
            <Panel key={post.data.id} className='text-sm'> 
                <div className="flex flex-row items-center mb-1 text-xs">
                    <a target='_blank' rel="noreferrer" 
                        href={`https://www.reddit.com/${post.data.subreddit_name_prefixed}`} 
                        className='hover:underline'>
                            {post.data.subreddit_name_prefixed}
                    </a>
                    <div className='ml-1 flex flex-row font-light text-slate-500'>
                        <a target='_blank' rel='noreferrer' 
                            href={`https://www.reddit.com/user/${post.data.author}/`}>
                            · post by <span className='hover:underline'>u/{post.data.author}</span>
                        </a>
                        <span className='flex flex-row ml-1'>
                            on <DateConverter date={post.data.created} classNames='ml-1'/>
                        </span>
                        <span className='flex flex-row ml-1'> 
                            · edited <DateConverter date={post.data.edited} classNames='ml-1'/>
                        </span>
                    </div>
                </div>
                <div className='mb-1 text-base font-semibold'>
                    <a target='_blank' rel='noreferrer' href={post.data.url} className='hover:underline'>
                        {post.data.title}
                    </a>
                </div>
                {post.data.link_flair_text && <div className='mb-2' style={{
                    borderRadius: '2rem',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    display:'inline-block', 
                    backgroundColor: post.data.link_flair_background_color || 'orange',}}>
                {post.data.link_flair_text} </div>}
                {selftextBody}
            </Panel>
        )})
        
        return <div>{renderedPosts}</div> 

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Posts;