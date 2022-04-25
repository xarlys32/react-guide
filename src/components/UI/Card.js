import "./Card.css"
function Card(props) {
    //Children will be the content between the tag <Card></Card>
    const classes = 'card ' + props.className
    return (
        <div className={classes}>{props.children}</div>
    )
}
export default Card;