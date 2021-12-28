import classes from "./Modal.module.css";
import { Fragment } from "react";

import reactDom from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
