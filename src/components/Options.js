import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Options ({to, children, className, activeClassName }){
    const { navigate, currentPath } = useNavigation();
    const classes = classNames(
        'text-black-400',
        className, 
        currentPath === to && activeClassName
    )
    
    const handleClick = (event) => {
        // opens link in a new tab if they hold down either the control or command key
        if (event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to)
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
};

export default Options;