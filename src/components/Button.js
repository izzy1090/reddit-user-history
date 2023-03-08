import className from "classnames";
function Button ({
    children,
    hover,
    active,
    rounded,
    ...rest
}) {
    
    const classes = className(rest.className, `flex items-center px-3 py-1.5 m-1 text-white bg-reddit-orange`, { 
        'hover:bg-orange-400': hover, 
        'active:bg-reddit-orange': active, 
        'rounded-lg': rounded,
    })
    return <button {...rest} className={classes}>
        {children}
    </button>
}

export default Button;