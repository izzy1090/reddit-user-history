import ReactLinkify from "react-linkify";

function ParseURL({children}){
    
    return <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key)=>
        (<a key={key} href={decoratedHref} 
            target="_blank" rel="noopener noreferrer"
            className="text-user-link-color hover:underline">
            {/* below regex grabs only the domain of the URL, rather than the full URL to keep things cleaner */}
            {decoratedText.match(/^(?:https?:\/\/)?(?:www\.)?([^:/\n?]+)/)[1]}
        </a>)}>
            {children}
    </ReactLinkify>
}

export default ParseURL;