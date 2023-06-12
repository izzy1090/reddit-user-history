import Options from "./Options";

function Navbar(){
    const links = [
        {label: 'Subreddits', path: '/userprofile'},
        {label: 'Posts', path: '/userprofile/posts'},
        {label: 'Comments', path: '/userprofile/comments'},
        {label: 'Metrics', path: '/metrics'}
    ]
    const renderedLinks = links.map((component)=> {
        return <Options 
            key={component.label}
            to={component.path}
            className='mr-5 sm:text-[.8rem]'
            activeClassName='font-bold text-reddit-text-orange 
            border-b-2 border-reddit-border-orange'>
                {component.label}    
        </Options>;
    });
    return <div className="overflow-y-scroll flex flex-row items-start pt-2 pb-2">
        {renderedLinks}
    </div>
};

export default Navbar;
