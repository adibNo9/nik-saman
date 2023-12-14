"use client";
import { ChangeEvent, useState } from "react";

import { Back } from "@/public/assets/icons/Back";

import Modal from "../Modal";
import RangeSlider from "../RangeSlider";
import styles from "./styles.module.scss";

const FilterModal = ({
  onClose,
  onFilter,
}: {
  onClose: () => void;
  onFilter: (value: { max: number; min: number }) => void;
}) => {
  const step = 1;
  const min = 0;
  const max = 10000;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMinVal = Math.min(value, maxValue);
    newMinVal >= 0 && newMinVal <= max && setMinValue(newMinVal);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMaxVal = Math.max(value, minValue);
    newMaxVal >= 0 && newMaxVal <= max && setMaxValue(newMaxVal);
  };

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
