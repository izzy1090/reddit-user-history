import Button from "./Button";

function FetchSubredditsList( { refreshToken } ){
    
    return <div className="flex flex-col items-center justify-center">
        <Button rounded active hover>{refreshToken}</Button>
    </div>
}

export default FetchSubredditsList;