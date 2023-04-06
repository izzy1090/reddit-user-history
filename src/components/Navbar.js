import Options from "./Options";

function Navbar(){
    const links = [
        {label: 'Subreddits', path: '/userprofile'},
        {label: 'Posts', path: '/userprofile/posts'},
        {label: 'Comments', path: '/userprofile/comments'},
        {label: 'D3', path: '/d3'}
    ]
    const renderedLinks = links.map((component)=> {
        return <Options 
            key={component.label}
            to={component.path}
            className='mr-5'
            activeClassName='font-bold 
            text-reddit-text-orange 
            border-b-2 
            border-reddit-border-orange'
            >
                {component.label}    
        </Options>;
    });
    return <div className="overflow-y-scroll flex flex-row items-start">
        {renderedLinks}
    </div>
};

export default Navbar;