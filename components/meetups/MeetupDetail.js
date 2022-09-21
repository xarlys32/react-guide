import classes from './MeetupDetail.module.css'
const MeetupDetail = (props) => {
    return(
        <>
            <section className={classes.detail}>
                <image src={props.img} title={props.title}/>
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </section>
        </>
)};
export default MeetupDetail;