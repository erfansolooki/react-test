import { ReactComponent as MenuIcon } from "./icons/HambergerMenu.svg";
import { ITopNav } from "./types";

export const TopNav = ({ isShowRN, setIsShowRN }: ITopNav) => {
  const rNToggle = () => {
    setIsShowRN(!isShowRN);
  };
  return (
    <div className="border-b border-gray-100 w-full fixed top-0 left-0 r-0 p-3">
      <div></div>

      <div></div>

      <div className="cursor-pointer" onClick={rNToggle}>
        <MenuIcon />
      </div>
    </div>
  );
};
