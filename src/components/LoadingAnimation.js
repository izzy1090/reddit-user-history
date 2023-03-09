function LoadingAnimation(){
    const loading = <div className="w-12 h-12 rounded-full animate-spin 
        border-y border-solid border-reddit-orange 
        border-t-transparent"/>
    return <div className="flex items-center justify-center">{loading}</div>
};

export default LoadingAnimation;