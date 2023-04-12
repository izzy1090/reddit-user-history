import ReactLinkify from "react-linkify";

function UrlParser({children}){
    return <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) =>{
        const domain = /^(?:https?:\/\/)?(?:www\.)?([^:/\n?]+)/;
        const previewReddit = decoratedText.match(/(?:https?:\/\/)?(preview.redd.it)/gi);
        const iReddit = decoratedHref.match(/(?:https?:\/\/)?(i.redd.it)/gi);

        // Grabs only the domain of the URL, rather than full URL to keep things cleaner
        if( previewReddit || iReddit){ 
            return null; 
        // Grabs any reddit preview URL to later remove for cleaner design
        } else {
            return (<a key={key} href={decoratedHref} 
                target="_blank" rel="noopener noreferrer"
                className="text-user-link-color hover:underline">
                {decoratedText.match(domain)[1]}
            </a> )
        }

    }}>
        {children}
    </ReactLinkify>
}

export default UrlParser;