import Dates from './Dates';
import LoadingAnimation from './Loading';
import Panel from './Panel';
import PostBody from './PostBody';
import Metrics from './Metrics';
import upArrow from '../public/images/up-arrow.svg'

function Posts({ posts }){
    if (posts.length !== 0){
        console.log('returned posts: ', posts)
        const responsiveParentClasses = 'flex xs:flex-col xs:flex-start md:flex-col xs:flex-start'
        const renderedPosts = posts.data.children.map( (post) => {
            return (
            <Panel key={post.data.id} className='text-sm'> 
                <div className={`flex flex-row mb-1 text-xs ${responsiveParentClasses}`}>
                    <a target='_blank' rel="noreferrer" 
                        href={`https://www.reddit.com/${post.data.subreddit_name_prefixed}`} 
                        className='font-semibold hover:underline'>
                            {post.data.subreddit_name_prefixed}
                    </a>
                    <div className='ml-1 flex flex-row text-slate-500 xs:m-0 xs:flex-col md:m-0 md:flex-col'>
                        <a target='_blank' rel='noreferrer' 
                            href={`https://www.reddit.com/user/${post.data.author}/`}>
                            <span className='xs:hidden md:hidden'>·</span> post by
                            <span className='ml-1 hover:underline'>
                                u/{post.data.author}
                            </span>
                        </a>
                        <span className='flex flex-row ml-1 xs:m-0 md:m-0'>
                            <span className='xs:hidden md:hidden'>on</span> <Dates date={post.data.created} classNames='ml-1 xs:m-0 md:m-0'/>
                        </span>
                        <span className='flex flex-row ml-1 xs:m-0 md:m-0'> 
                            <span className='mr-1 xs:hidden md:hidden'>·</span> edited <Dates date={post.data.edited} classNames='ml-1'/>
                        </span>
                    </div>
                    
                </div>
                <div className='flex flex-row'>
                <div className=" pr-1 pt-1">
                    <div className="flex flex-row items-center text-xs text-slate-600">
                        <Metrics value={post.data.ups}/>
                        <img src={upArrow} height={15} width={15} alt="Up icon to represent upvotes"/>
                    </div> 
                </div>
                <div className='mb-1 text-base font-semibold ml-1'>
                    <a target='_blank' rel='noreferrer' 
                        href={post.data.url} 
                        className='hover:underline'>
                        {post.data.title}
                    </a>
                </div>
                </div>
                {post.data.link_flair_text && <div className='mb-2' style={{
                    borderRadius: '2rem',
                    paddingLeft: '5px',
                    paddingRight: '5px',
                    display:'inline-block', 
                    backgroundColor: post.data.link_flair_background_color || 'orange',}}>
                {post.data.link_flair_text} </div>}
                <PostBody data={post.data} id={post.data.id}/>
            </Panel>
        )})
        
        return <div>{renderedPosts}</div> 

    } else return <Panel><LoadingAnimation/></Panel>
    
};

export default Posts;
