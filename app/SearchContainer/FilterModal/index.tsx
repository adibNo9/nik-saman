"use client";
import { Back } from "@/public/assets/icons/Back";

import Modal from "../Modal";
import RangeSlider from "../RangeSlider";
import { IRangeProps } from "../types";
import styles from "./styles.module.scss";

interface IProps extends IRangeProps {
  onClose: () => void;
  onFilter: (value: { max: number; min: number }) => void;
}

const FilterModal = ({
  onClose,
  onFilter,
  handleMaxChange,
  handleMinChange,
  max,
  maxValue,
  min,
  minValue,
  step,
}: IProps) => {
  const applyHandler = () => {
    onFilter({ min: minValue, max: maxValue });
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
          <RangeSlider
            step={step}
            handleMaxChange={handleMaxChange}
            handleMinChange={handleMinChange}
            max={max}
            min={min}
            maxValue={maxValue}
            minValue={minValue}
          />
        </div>
        <button onClick={applyHandler} className={styles["apply-btn"]}>
          Apply Changes
        </button>
      </div>
    </Modal>
  );
};

export default FilterModal;
