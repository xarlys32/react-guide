import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClick}>

        </div>
    )
    
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const formElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose}></Backdrop>, formElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, formElement)}
        </>
    )
}
export default Modal;