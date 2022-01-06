const Item = (props) => { //poderia passar const Item = ( {children} ) e colocar na tag A {children} em vez de props
    return (
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
            {props.texto}
            {props.children}
        </a>
    )
}

export default Item;