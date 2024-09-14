import { ReactComponent as MenuIcon } from "./icons/HambergerMenu.svg";
import { Profile } from "./profile";
import { SearchBar } from "./searchBar";
import { ITopNav } from "./types";

export const TopNav = ({ isShowRN, setIsShowRN }: ITopNav) => {
  const rNToggle = () => {
    setIsShowRN(!isShowRN);
  };
  return (
    <div
      style={{
        width: window.innerWidth > 600 ? "calc(100vw - 20rem)" : "100%",
      }}
      className={`border-b border-gray-100 fixed top-0 right-0 r-0 p-3 flex items-center`}
    >
      {!isShowRN && window.innerWidth < 600 ? (
        <div className="cursor-pointer" onClick={rNToggle}>
          <MenuIcon />
        </div>
      ) : (
        <></>
      )}

      <SearchBar />

      <Profile />
    </div>
  );
};
