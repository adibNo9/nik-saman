import { ChangeEvent } from "react";

export interface IRangeProps {
  step: number;
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  handleMinChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMaxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
