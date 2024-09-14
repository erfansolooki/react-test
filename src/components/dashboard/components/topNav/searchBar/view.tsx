import { ChangeEvent, useState } from "react";
import { ReactComponent as SearchIcon } from "./icon/Search.svg";
import { IoCloseOutline } from "@react-icons/all-files/io5/IoCloseOutline";

export const SearchBar = () => {
  const [value, setValue] = useState<string>(null!);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clearInputHandler = () => {
    setValue(null!);
  };

  console.log(value, "value");
  return (
    <div className="flex items-center w-full">
      <div className="flex mx-2">
        <SearchIcon />
      </div>
      <input
        value={value || ""}
        onChange={(e) => onChangeHandler(e)}
        type="text"
        placeholder="Search..."
        className="outline-none w-full"
      />
      {value && (
        <div onClick={clearInputHandler} className="cursor-pointer">
          <IoCloseOutline />
        </div>
      )}
    </div>
  );
};
