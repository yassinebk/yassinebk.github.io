import { useState } from "react";

export const useFilter = (initialFilter:string[] = [], options) => {
  const [filter, setFilter] = useState(initialFilter);
  const setOption = (option) => {
    if (options.includes(option)) setFilter([...filter, option]);
  };

  const resetFilter = () => setFilter(initialFilter);

  return {
    filter,
    resetFilter,
    setOption,
  };
};
