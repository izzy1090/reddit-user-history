import LoadingAnimation from "./Loading";
import Dates from "./Dates";

function RedditUserProfile( {userProfile, loading} ) {
    if (userProfile){
        // The below is the wrapper for the user profile card
        const profileCard = <div className="flex flex-col items-center">
            <img className="w-[80px] h-[80px]" 
                src={userProfile.snoovatar_img} 
                alt="The Reddit user's avatar."/>
            <div className="font-bold text-lg mb-1">
                <a target="_blank" rel="noreferrer"
                    href={`https://www.reddit.com/user/${userProfile.name}`}
                    className="text-reddit-text-orange hover:underline">
                {userProfile.name}
                </a>
            </div>
            <div className="text-gray-700 text-base">
                <div className="flex flex-row">
                    <span className="font-semibold">Profile Created:</span>
                    <Dates date={userProfile.created} classNames='ml-1'/>
                </div>
                <div className="flex flex-row">
                    <span className="font-semibold">Total Karma:</span> 
                    <div className="ml-1">{userProfile.total_karma}</div>
                </div>
                <div className="flex flex-row">
                    <span className="font-semibold">Awardee Karma:</span> 
                    <div className="ml-1">{userProfile.awardee_karma}</div>
                </div>
                
                <div className="flex flex-row">
                    <span className="font-semibold">Comment Karma:</span> 
                    <div className="ml-1">{userProfile.comment_karma}</div>
                </div>
                <div className="flex flex-row">
                    <span className="font-semibold">Gold Creddits:</span>
                    <div className="ml-1">{userProfile.gold_creddits}</div>
                </div>
            </div> 
        </div>;
        // This iterates over the profile card and looks for undefined fields
        // Essentially a way to init. a noContent variable when any of the fields are undefined
        const noContent = profileCard.props.children.filter((prop)=>{
            return prop.props.src !== undefined
        });
        // this then looks at the profile card and checks to see: 
        // if loading state is false, userProfile is defined, and the noContent array does not equal 0
        // display the profileCard else display a Loading Animation
        const content = !loading && userProfile && noContent.length !== 0 ? profileCard : <LoadingAnimation/>;
        
        return <div className="flex items-center justify-center max-w-sm rounded overflow-hidden border-1 border-panel-border-color bg-panel-bg-color shadow-lg h-64">
            { content }
        </div>
    }
}

export default RedditUserProfile;