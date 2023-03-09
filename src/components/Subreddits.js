import LoadingAnimation from "./LoadingAnimation";
import Panel from "./Panel";
import RedditLogo from '../public/images/reddit_logo.png';
import MonthConverter from "./MonthConverter";

function Subreddits({ subreddits }){
    
    if (subreddits.length !== 0){
        const renderedSubreddits = subreddits.data.children.map((subreddit, i)=>{
            if (!subreddit.data.icon_img){
                subreddit.data.icon_img = RedditLogo;
            }
            if (!subreddit.data[undefined]){
                
                return (
                <Panel key={i} className={'text-sm'}>
                    <div className="flex flex-row items-center mb-2 text-xs">
                        <a target="_blank" rel='noreferrer' href={`https://www.reddit.com${subreddit.data.url}`}>
                        <img src={subreddit.data.icon_img} 
                            alt='Icon used for each subreddit' 
                            className="w-[20px] h-[20px] rounded-full"/></a>
                        <div className="pl-2 font-medium hover:underline">
                            <a target="_blank" rel='noreferrer' href={`https://www.reddit.com${subreddit.data.url}`}>
                            {subreddit.data.display_name_prefixed}</a>
                        </div>
                        <div className="flex flex-row pl-1 font-light text-slate-500">
                            · created <MonthConverter date={subreddit.data.created}/>
                        </div>
                    </div>
                    <div className='mb-1'>{subreddit.data.public_description}</div>
                    <div>Subscribers: {subreddit.data.subscribers}</div>
                </Panel>
                )
            } else return <div>No content found...</div>;
        })
        return<div>{renderedSubreddits}</div>
        // possibly include logic below to redirect the user back to the authentication page if they
        // try to visit a page in the website without first authenticating the app
    } else return <Panel><LoadingAnimation/></Panel>
    
    
};

export default Subreddits;