function LoadingAnimation(){
    const loading = <div className="w-12 h-12 rounded-full animate-spin 
        border-y border-1 border-solid border-reddit-border-orange 
        border-t-transparent"/>
    return <div className="flex items-center justify-center h-40">{loading}</div>
};

export default LoadingAnimation;