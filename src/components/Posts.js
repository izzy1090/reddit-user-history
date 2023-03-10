import DateConverter from './DateConverter';
import LoadingAnimation from './LoadingAnimation';
import Panel from './Panel';

function Posts({posts}){
    if (posts.length !== 0){
        // console.log(posts)
        const renderedPosts = posts.data.children.map( (post, i) => {
            
            console.log(post.data)
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
                <div className='whitespace-pre-wrap'>
                    {post.data.selftext}
                </div>
            </Panel>)
        })
        return <div className=''>{renderedPosts}</div> 
    } else return <LoadingAnimation/>
};

export default Posts;