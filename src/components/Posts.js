import DateConverter from './DateConverter';
import ExpandContent from './ExpandContent';
import LoadingAnimation from './LoadingAnimation';
import Panel from './Panel';

function Posts({posts}){
    if (posts.length !== 0){
        const renderedPosts = posts.data.children.map( (post) => {
            return (
            <Panel key={post.data.id} className='text-sm'> 
                <div className="flex flex-row items-center mb-1 text-xs">
                    <a target='_blank' rel="noreferrer" 
                        href={`https://www.reddit.com/${post.data.subreddit_name_prefixed}`} 
                        className='font-semibold hover:underline'>
                            {post.data.subreddit_name_prefixed}
                    </a>
                    <div className='ml-1 flex flex-row text-slate-500'>
                        <a target='_blank' rel='noreferrer' 
                            href={`https://www.reddit.com/user/${post.data.author}/`}>
                            · post by 
                            <span className='ml-1 hover:underline'>
                                u/{post.data.author}
                            </span>
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
                <ExpandContent data={post.data.selftext} id={post.data.id}/>
            </Panel>
        )})
        
        return <div>{renderedPosts}</div> 

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Posts;