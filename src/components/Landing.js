import Button from "./Button";

function Landing( { authToken, fetchCredentials } ){

    const handleFetchCredentials = () => {
        fetchCredentials(authToken)
    }
    const handleRefreshToken = () => {

    }
    return <div className="flex flex-col items-center justify-center">
        <Button rounded active hover onClick={handleFetchCredentials}>Fetch Credentials</Button>
        <Button rounded active hover onClick={handleRefreshToken}>Fetch Refresh Token</Button>
    </div>
}

export default Landing;