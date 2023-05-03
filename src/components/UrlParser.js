import ReactLinkify from "react-linkify";

function UrlParser({children}){
    // Tip (.*) means anything in b/t - i.e. from ] to )
    const regexGif = /!\[gif\](.*)\)/;
    children = children.replace(regexGif, '');
    
    return <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) =>{
        const domain = /^(?:https?:\/\/)?(?:www\.)?([^:/\n?]+)/;
        const previewReddit = decoratedText.match(/(?:https?:\/\/)?(preview.redd.it)/gi);
        const iReddit = decoratedHref.match(/(?:https?:\/\/)?(i.redd.it)/gi);
        // const giphy = decoratedText.match(/(?:http?:\/\/)?(giphy.com)/)
        
        // Grabs only the domain of the URL, rather than full URL to keep things cleaner
        if( previewReddit || iReddit){ 
            return null; 
        // Grabs any reddit preview URL to later remove for cleaner design
        } 
        // if (giphy){
        //     return null;
        // } 
        else {
            return (<a key={key} href={decoratedHref} 
                target="_blank" rel="noreferrer"
                className="text-user-link-color hover:underline">
                {decoratedText.match(domain)[1]}
            </a> )
        }

    }}>
        {children}
    </ReactLinkify>
}

export default UrlParser;