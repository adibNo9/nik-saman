"use client";

import { useEffect, useState } from "react";

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
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<IProduct[]>();
  const [filter, setFilter] = useState("");

  const changeFilterHandler = (value: { min: number; max: number }) => {
    data?.filter(
      (item) =>
        value.min < parseInt(item.price) && value.max > parseInt(item.price)
    );
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
        <FilterModal onClose={handleClose} onFilter={changeFilterHandler} />
      )}
      <Products data={data} />
    </>
  );
};

export default SearchContainer;
