import { useState } from "react";

export const useSearchFilter = (initialFilter: string = "") => {
  const [searchFilter, setSearchFilter] = useState(initialFilter);
  const updateSearchFilter = (value: string) => {
    setSearchFilter(value);
  };

  const resetSearchFilter = () => {
    setSearchFilter(initialFilter);
  };

  return {
    searchFilter
    ,updateSearchFilter,
    resetSearchFilter
  };
};
