function RedditUserProfile( {userProfile, loading} ) {
    const returnedProfileCreationDate = new Date(userProfile.created * 1000);
    function monthConverter(month){
        if (month >= 0 && month <= 9){
            let incrementMonth = month;
            incrementMonth++;
            const addZero = '0' + incrementMonth;
            return addZero;
        } else return month;
    }
    
    const months = monthConverter(returnedProfileCreationDate.getMonth());
    const convertedProfileCreationDate = 
    `${months}/${returnedProfileCreationDate.getDate()}/${returnedProfileCreationDate.getFullYear()}`;
    
    const profileCard = <div className="flex flex-col items-center m-3">
        <img 
            className="w-[80px] h-[80px]" 
            src={userProfile.snoovatar_img} 
            alt="The Reddit user's avatar."/>
        <div className="font-bold text-xl mb-1">{userProfile.name}</div>
        <div className="text-gray-700 text-base">
            <div>Profile Created: {convertedProfileCreationDate}</div>
            <div>Total Karma: {userProfile.total_karma}</div>
            <div>Awardee Karma: {userProfile.awardee_karma}</div>
            <div>Comment Karma: {userProfile.comment_karma}</div>
            <div>Gold Creddits: {userProfile.gold_creddits}</div>
        </div>
    </div>
    
    const noContent = profileCard.props.children.filter((prop)=>{
        return prop.props.src !== undefined
    })
    const content = !loading && userProfile && noContent.length !== 0 ? profileCard : 'Loading...'
    
    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
        { content }
    </div>
}

export default RedditUserProfile;