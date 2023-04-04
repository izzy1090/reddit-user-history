function EmbeddedMedia({media}){
    const checkJpgPng = media.includes('.jpg') || media.includes('.png') || media.includes('.jpeg')
    let renderedMedia;
    if (checkJpgPng){
        renderedMedia = <>
            <a target='_blank' rel="noreferrer" href={media}>
                <img src={media} className="m-auto" alt="Embedded images from comment section."/>
            </a>
        </>
    } return renderedMedia;
}

export default EmbeddedMedia;