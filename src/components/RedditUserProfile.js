import LoadingAnimation from "./LoadingAnimation";
import MonthConverter from "./MonthConverter";

function RedditUserProfile( {userProfile, loading} ) {
    
    const profileCard = <div className="flex flex-col items-center m-3">
        <img 
            className="w-[80px] h-[80px]" 
            src={userProfile.snoovatar_img} 
            alt="The Reddit user's avatar."/>
        <div className="font-bold text-xl mb-1">{userProfile.name}</div>
        <div className="text-gray-700 text-base">
            <div className="flex flex-row">Profile Created:<MonthConverter date={userProfile}/></div>
            <div>Total Karma: {userProfile.total_karma}</div>
            <div>Awardee Karma: {userProfile.awardee_karma}</div>
            <div>Comment Karma: {userProfile.comment_karma}</div>
            <div>Gold Creddits: {userProfile.gold_creddits}</div>
        </div> 
    </div>;
    
    const noContent = profileCard.props.children.filter((prop)=>{
        return prop.props.src !== undefined
    });
    
    const content = !loading && userProfile && noContent.length !== 0 ? profileCard : <LoadingAnimation/>;
    
    return <div className="flex items-center justify-center max-w-sm rounded overflow-hidden shadow-lg h-64">
        { content }
    </div>;
}

export default RedditUserProfile;