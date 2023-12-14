import { ChangeEvent, FocusEvent } from "react";

import styles from "./styles.module.scss";

interface IProps {
  step: number;
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  handleMinChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMaxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangeSlider = ({
  step,
  min,
  max,
  minValue,
  maxValue,
  handleMinChange,
  handleMaxChange,
}: IProps) => {
  const handleFocus = (event: FocusEvent<HTMLInputElement>) =>
    event.target.select();

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["input-wrapper"]}>
          <input
            className={styles.input}
            type="range"
            value={minValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMinChange}
          />
          <input
            className={styles.input}
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        </div>

        <div className={styles["control-wrapper"]}>
          <div className={styles.control} style={{ left: `${minPos}%` }} />
          <div className={styles.rail}>
            <div
              className={styles["inner-rail"]}
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className={styles.control} style={{ left: `${maxPos}%` }} />
        </div>
      </div>
      <div className={styles["text-input-wrapper"]}>
        <div className={styles["text-input"]}>
          <span>$</span>
          <input
            type="number"
            maxLength={maxValue - 1}
            onChange={handleMinChange}
            onFocus={handleFocus}
            value={minValue}
            max={max}
            min={min}
          />
        </div>
        <span className={styles.dash}>-</span>
        <div className={styles["text-input"]}>
          <span>$</span>
          <input
            type="number"
            maxLength={maxValue}
            max={max}
            min={min}
            onChange={handleMaxChange}
            value={maxValue}
            onFocus={handleFocus}
          />
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
