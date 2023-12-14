import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./styles.module.scss";

interface IProps {
  children: ReactNode;
  handleClose: () => void;
}

const Modal = ({ children, handleClose }: IProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return mounted && ref.current
    ? createPortal(
        <>
          <div className={styles.backdrop} onClick={handleClose} />
          <div className={styles["modal-wrapper"]}>{children}</div>
        </>,
        ref.current
      )
    : null;
};
export default Modal;
