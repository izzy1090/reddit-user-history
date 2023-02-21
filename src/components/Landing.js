function Landing( { authToken, fetchCredentials } ){

    const handleClick = () => {
        fetchCredentials(authToken)
    }
    return <button onClick={handleClick}>Fetch Credentials</button>
}

export default Landing;