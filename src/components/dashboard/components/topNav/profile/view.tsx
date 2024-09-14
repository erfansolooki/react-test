import { ReactComponent as NotifIcon } from "./icons/Notification.svg";
import { ReactComponent as ArrowDownIcon } from "./icons/ArrowDown.svg";
import tomCookImg from "./icons/photo.avif";

export const Profile = () => {
  return (
    <div className="flex items-center">
      <div className="flex border-r-2 border-l-gray-300 px-2">
        <NotifIcon />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <img
            src={tomCookImg}
            alt=""
            className="rounded-full object-cover w-8 h-8 mx-4"
          />
        </div>

        {window.innerWidth > 600 ? (
          <>
            <div className="text-nowrap pl-6 pr-2 text-gray-950 font-semibold">
              Tom Cook
            </div>

            <div className="flex">
              <ArrowDownIcon />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
