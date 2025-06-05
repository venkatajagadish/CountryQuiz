import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";
import classes from "./Modal.module.css";

const Modal = function ({ children, ref, closeModal }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className={classes.container} ref={dialog} onClose={closeModal}>
      <div className={classes.modal}>
        {children}
        <form method="dialog">
          <button>Play again</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
