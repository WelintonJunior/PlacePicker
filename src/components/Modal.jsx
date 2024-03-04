import { useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = function Modal({ children, open }) {
  const dialog = useRef();

  return createPortal(
    <dialog className="modal" open={open} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
