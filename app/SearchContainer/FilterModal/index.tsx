"use client";
import { Back } from "@/public/assets/icons/Back";

import Modal from "../Modal";
import RangeSlider from "../RangeSlider";
import styles from "./styles.module.scss";

const FilterModal = ({ onClose }: { onClose: () => void }) => {
  const applyHandler = () => {
    onClose();
  };

  return (
    <Modal handleClose={onClose}>
      <div className="dir-ltr">
        <button onClick={onClose} className={styles["back-btn"]}>
          <Back />
          Buy Filter
        </button>

        <div className="my-8">
          <h4>Price Range</h4>
          <RangeSlider />
        </div>
        <button onClick={applyHandler} className={styles["apply-btn"]}>
          Apply Changes
        </button>
      </div>
    </Modal>
  );
};

export default FilterModal;
