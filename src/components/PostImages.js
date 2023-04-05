function PostImages ( {children} ) {
    const foundImages = children.match(/https?:\/\/\S+\.(?:png|jpg|jpeg|gif)(?:\?.+)?/gi);  
    if (foundImages){
        return foundImages.map((val)=>{
            if (val.includes(')')){
                val = val.slice(0, val.length-1)
            }
            return <div key={val}>
                <a href={val} target="_blank" rel="noreferrer">
                    <img  src={val} alt="Embedded images from text" className="m-auto p-2"/>
                </a>
            </div>
        })
    } 
};

export default PostImages;