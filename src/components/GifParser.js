function GifParser({ gif }){
    if (gif){
        console.log('found in posts: ', gif)
        // Iterate over the gif object to access all the available key/value pairs
        for (const key in gif){
            const foundGif = gif[key].id;
            // If the an ID key is found
            if (foundGif){
                // Replace any found IDs that have a 'downsized' as well as a "|" with an empty string
                const gifId = foundGif.replace(/(\|)?(downsized)/, '');
                
                // This also checks for any ID's that have "giphy" in front of the ID
                if (gifId.includes('giphy')){
                    
                    const gifIdAlt = gifId.replace(/(giphy)?(\|)/,'')
                    return <iframe src={`https://giphy.com/embed/${gifIdAlt}`} 
                        title="Embedded GIFs from Reddit" className="p-1"/>
                } 
                return <iframe src={`https://giphy.com/embed/${gifId}`} 
                    title="Embedded GIFs from Reddit" className="p-1"/>
            }
        }
    }
    
};

export default GifParser;