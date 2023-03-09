import LoadingAnimation from "./LoadingAnimation";

function SubscribedReddits({ subscribedSubreddits }){
    if (subscribedSubreddits.length !== 0){
        const renderedSubscribedSubreddits = subscribedSubreddits.data.children.map((subreddit, i)=>{
            if (!subreddit.data[undefined]){
                return <div key={i}>
                    <img src={subreddit.data.icon_img} alt=''/>
                    <div>Subreddit Name: {subreddit.data.display_name_prefixed}</div>
                    <div>Description: {subreddit.data.public_description}</div>
                    <div>Subscribers: {subreddit.data.subscribers}</div>
                    <div>Category: {subreddit.data.advertiser_category}</div>
                    <div>Favorited By User: {subreddit.data.user_has_favorited}</div>
                </div>
            } else return <div>No content found...</div>;
        })
        return<div>{renderedSubscribedSubreddits}</div>
    } else return <LoadingAnimation/>
    
    
};

export default SubscribedReddits;