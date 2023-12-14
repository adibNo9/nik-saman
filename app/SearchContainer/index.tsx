"use client";

import { ChangeEvent, useEffect, useState } from "react";

import axios from "axios";

import FilterModal from "./FilterModal";
import Products from "./Products";
import SearchInput from "./SearchInput";

export interface IProduct {
  id: number;
  title: string;
  price: string;
}

const SearchContainer = () => {
    const min = 0;
    const max = 10000;
    const step = 1;
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState<IProduct[]>();
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

    const changeFilterHandler = (value: { min: number; max: number }) => {
      console.log("first", value.min, value.max);
      const filteredData = data?.filter(
        (item) =>
          value.min < parseInt(item.price) && value.max > parseInt(item.price)
      );

      setData(filteredData);

      console.log(data);
    };

    useEffect(() => {
      searchValue.length > 0 &&
        axios
          .get(`http://localhost:8080/posts`)
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {});
    }, [searchValue]);

    const searchHandler = (value: string) => {
      setSearchValue(value);
    };

    const handleClose = () => {
      setModalOpen(false);
    };
    const handleOpen = () => {
      setModalOpen(true);
    };

    return (
      <>
        <SearchInput onOpen={handleOpen} onSubmit={searchHandler} />
        {isModalOpen && (
          <FilterModal
            step={step}
            handleMaxChange={handleMaxChange}
            handleMinChange={handleMinChange}
            max={max}
            min={min}
            maxValue={maxValue}
            minValue={minValue}
            onClose={handleClose}
            onFilter={changeFilterHandler}
          />
        )}
        <Products data={data} />
      </>
    );
};

export default SearchContainer;
