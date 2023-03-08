function SubscribedReddits({ subscribedSubreddits }){
    if (subscribedSubreddits.length !== 0){
        const renderedSubscribedSubreddits = subscribedSubreddits.data.children.map((subreddit, i)=>{
            return <div key={subreddit[i]}>{subreddit}</div>
        })
        console.log(renderedSubscribedSubreddits)
        return<div>Subscribed Reddits</div>
    }
    
    
};

export default SubscribedReddits;