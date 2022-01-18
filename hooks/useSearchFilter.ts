import { useState } from "react";

export const useTagFilter = (initialFilter: string[] = [], options) => {
  const [tagFilter, setTagFilter] = useState(initialFilter);
  const addTag = (option: any) => {
    if (options.includes(option)) setTagFilter([...tagFilter, option]);
  };

  const resetTagFilter = () => { setTagFilter(initialFilter); console.log(tagFilter)}

  const removeTag = (short: string) => {
    setTagFilter(tagFilter.filter((t) => t !== short));
  };
  const toggleTag = (short: string) => {
    if (tagFilter.includes(short)) removeTag(short);
    else addTag(short);
  };

  return {
     tagFilter,
     toggleTag,
     resetTagFilter,
     addTag,
  };
};
