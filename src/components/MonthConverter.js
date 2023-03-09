function MonthConverter( { date } ){
    if (date === false){
        return <div>Never edited</div>
    }
    const returnedProfileCreationDate = new Date(date * 1000);
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
    return <div className="pl-1">{convertedProfileCreationDate}</div>;
};

export default MonthConverter;