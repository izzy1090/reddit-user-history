import Link from "./Link";

function Navbar(){
    const links = [
        {label: 'Subscribed Subreddits', path: '/userprofile'},
        {label: 'Posts', path: '/userprofile/posts'},
        {label: 'Comments', path: '/userprofile/comments'}
    ]

    const renderedLinks = links.map((component)=> {
        return <Link 
            key={component.label}
            to={component.path}
            className='mr-5'
            activeClassName='font-bold reddit-text-orange border-b-2 border-reddit-border-orange'
            >
                {component.label}    
        </Link>;
    });
    return <div className="overflow-y-scroll flex flex-row items-start">
        {renderedLinks}
    </div>
};

export default Navbar;