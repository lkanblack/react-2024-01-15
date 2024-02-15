import { useState } from "react";
import { createPortal } from "react-dom"; // corrected import statement
import { CartContainer } from "../cart/container";

import styles from "./styles.module.scss";

export const CartButton = ({ amount }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.root}>
      <button onClick={() => setIsVisible(!isVisible)}>{amount}</button>
      {isVisible && createPortal(
        <div className={styles.modal}>
          <CartContainer />
        </div>,
        document.getElementById("popoverContainer")
      )}
    </div>
  );
};
