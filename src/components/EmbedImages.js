function EmbedImages({media}){
    const checkJpgPng = media.includes('.jpg') || media.includes('.png') || media.includes('.jpeg')
    let renderedMedia;
    if (checkJpgPng){
        renderedMedia = <>
            <a target='_blank' rel="noreferrer" href={media}>
                <img src={media} alt="Embedded images from comment section." className="m-auto"/>
            </a>
        </>
    } return renderedMedia;
}

export default EmbedImages;