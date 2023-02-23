import Button from "./Button";

function Landing( { handleRequest, refreshToken } ){

    const handleFetchRefreshToken = () => {
        handleRequest(refreshToken)
    }
    return <div className="flex flex-col items-center justify-center">
        <Button rounded active hover onClick={handleFetchRefreshToken}>Fetch Refresh Token</Button>
    </div>
}

export default Landing;