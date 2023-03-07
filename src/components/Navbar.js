import Link from "./Link";

function Sidebar(){
    const links = [
        {label: 'Subscribed Subreddits', path: '/userprofile/subs'},
        {label: 'Posts', path: '/userprofile/posts'},
        {label: 'Comments', path: '/userprofile/comments'}
    ]

    const renderedLinks = links.map((component)=> {
        return <Link 
            key={component.label}
            to={component.path}
            className={'ml-3'}
            activeClassName='font-bold border-b-4 border-black'
            >
                {component.label}
        </Link>;
    });
    return <div className="overflow-y-scroll flex flex-row items-start">
        {renderedLinks}
    </div>
};

export default Sidebar;