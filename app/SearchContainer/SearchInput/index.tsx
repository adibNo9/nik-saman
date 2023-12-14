"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import { Filter } from "@/public/assets/icons/Filter";
import { Search } from "@/public/assets/icons/Search";

import styles from "./styles.module.scss";

const SearchInput = ({
  onOpen,
  onSubmit,
}: {
  onOpen: () => void;
  onSubmit: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <div className={styles["search-input-wrapper"]}>
      <form onSubmit={submitHandler} className={styles["form-wrapper"]}>
        <div className={styles["input-wrapper"]}>
          <Search className={styles.icon} />
          <label htmlFor="username">Looking for something specific?</label>
          <input
            onChange={inputChangeHandler}
            id="username"
            type="text"
            placeholder="Condos in downtown Toronto?"
          />
        </div>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpen();
        }}
        className={styles["filter-btn"]}
      >
        <Filter className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchInput;
