function MonthConverter( {date} ){
    const returnedProfileCreationDate = new Date(date.created * 1000);
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
    return <div>{convertedProfileCreationDate}</div>;
};

export default MonthConverter;