function DateConverter( { date, classNames } ){
    if (date === false){
        return <div className="ml-1">never</div>
    }
    const returnedProfileCreationDate = new Date(date * 1000);
    function DateConverter(month){
        if (month >= 0 && month <= 9){
            let incrementMonth = month;
            incrementMonth++;
            const addZero = '0' + incrementMonth;
            return addZero;
        } else return month;
    }
    const months = DateConverter(returnedProfileCreationDate.getMonth());
    const convertedProfileCreationDate = 
    `${months}/${returnedProfileCreationDate.getDate()}/${returnedProfileCreationDate.getFullYear()}`;
    return <div className='pl-1'>{convertedProfileCreationDate}</div>;
};

export default DateConverter;