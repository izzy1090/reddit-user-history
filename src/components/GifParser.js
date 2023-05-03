function GifParser({ gif }){
    if (gif){
        // Iterate over the gif object to access all the available key/value pairs
        for (const key in gif){
            // console.log(gif[key])
            const foundGif = gif[key].id;
            // If the an ID key is found
            if (foundGif){
                // Replace any found IDs that have a 'downsized' as well as a "|" with an empty string
                const gifId = foundGif.replace(/(\|)?(downsized)/, '');
                
                // This also checks for any ID's that have "giphy" in front of the ID
                if (gifId.includes('giphy')){
                    const gifIdAlt = gifId.replace(/(giphy)?(\|)/,'')
                    return <video autoPlay loop muted width={300} className="m-auto p-1">
                        <source src={`https://media.giphy.com/media/${gifIdAlt}/giphy.mp4`}></source>
                    </video>
                } 
                return <video autoPlay loop muted width={300} className="m-auto p-1">
                    <source src={`https://media.giphy.com/media/${gifId}/giphy.mp4`}></source>
                </video>
            } 
        }
    }
    
};

export default GifParser;