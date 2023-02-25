function Landing( {userProfile} ){

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
    
    return <div className="flex flex-col items-center justify-center">
        <img 
            className="w-[80px] h-[80px]" 
            src={userProfile.snoovatar_img} 
            alt="The reddit user's avatar."/>
        <div>Username: {userProfile.name}</div>
        <div>Profile Created: {convertedProfileCreationDate}</div>
        <div>Total Karma: {userProfile.total_karma}</div>
        <div>Awardee Karma: {userProfile.awardee_karma}</div>
        <div>Comment Karma: {userProfile.comment_karma}</div>
        <div>Gold Creddits: {userProfile.gold_creddits}</div>
    </div>
}

export default Landing;