import LoadingAnimation from "./LoadingAnimation";
import Panel from "./Panel";
import RedditLogo from '../images/reddit_logo.png';
import MonthConverter from "./MonthConverter";

function Subreddits({ subreddits }){
    const subCategoryStyles = 'mb-1';

    if (subreddits.length !== 0){
        const renderedSubreddits = subreddits.data.children.map((subreddit, i)=>{
            if (!subreddit.data.icon_img){
                subreddit.data.icon_img = RedditLogo;
            }
            if (!subreddit.data[undefined]){
                console.log(subreddit.data)
                return (
                <Panel key={i} className={'text-sm'}>
                    <div className="flex flex-row items-center mb-2 text-xs">
                        <a href={`https://www.reddit.com${subreddit.data.url}`}>
                        <img src={subreddit.data.icon_img} 
                            alt='Icon used for each subreddit' 
                            className="w-[20px] h-[20px] rounded-full"/></a>
                        <div className="pl-2 font-medium">{subreddit.data.display_name_prefixed}</div>
                        <div className="flex flex-row pl-1 font-light text-slate-500">
                            · created <MonthConverter date={subreddit.data.created}/>
                        </div>
                    </div>
                    <div className={subCategoryStyles}>{subreddit.data.public_description}</div>
                    <div className={subCategoryStyles}>Subscribers: {subreddit.data.subscribers}</div>
                    <div className={subCategoryStyles}>Category: {subreddit.data.advertiser_category}</div>
                </Panel>
                )
            } else return <div>No content found...</div>;
        })
        return<div>{renderedSubreddits}</div>
    } else return <Panel><LoadingAnimation/></Panel>
    
    
};

export default Subreddits;