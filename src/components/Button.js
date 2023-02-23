import className from "classnames";
function Button ({
    children,
    hover,
    active,
    rounded,
    ...rest
}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 m-1 text-white bg-orange-500', { 
        'hover:bg-orange-400': hover, 
        'active:bg-orange-600': active, 
        'rounded-lg': rounded,
    })
    return <button {...rest} className={classes}>
        {children}
    </button>
}

export default Button;