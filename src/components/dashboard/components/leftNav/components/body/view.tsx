import { HiOutlineChartPie } from "@react-icons/all-files/hi/HiOutlineChartPie";
import { IBodyItem } from "./types";
import { ReactComponent as HomeIcon } from "./icons/Home.svg";
import { ReactComponent as UserIcon } from "./icons/Profile2User.svg";
import { ReactComponent as FolderIcon } from "./icons/Folder.svg";
import { ReactComponent as CalendarIcon } from "./icons/Calendar.svg";
import { ReactComponent as DocumentIcon } from "./icons/Document.svg";

const dataItem: IBodyItem[] = [
  {
    caption: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    caption: "Team",
    icon: <UserIcon />,
  },
  {
    caption: "Projects",
    icon: <FolderIcon />,
  },
  {
    caption: "Calendar",
    icon: <CalendarIcon />,
  },
  {
    caption: "Documents",
    icon: <DocumentIcon />,
  },
  {
    caption: "Reports",
    icon: <HiOutlineChartPie size={24} color="#d1d5db" strokeWidth={0.5} />,
  },
];

const TEAM_MENU_ITEM: IBodyItem[] = [
  {
    caption: "HeroIcons",
    icon: "H",
  },
  {
    caption: "Tailwind Labs",
    icon: "T",
  },
  {
    caption: "Workaction",
    icon: "W",
  },
];

export const Body = () => {
  return (
    <div className="my-10">
      <div>
        {dataItem.map((item) => (
          <div className="flex items-center cursor-pointer py-3 hover:bg-[#f1f2f318] rounded-md pl-2 mt-1 group">
            <div className="flex">{item.icon}</div>
            <div className="px-2 group-hover:text-white text-gray-300">
              {item.caption}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mt-8 mb-2 text-start text-gray-500 font-bold text-sm">
          Your Teams
        </div>
        {TEAM_MENU_ITEM.map((item) => (
          <div className="flex items-center pl-2 hover:bg-[#f1f2f318] rounded-md cursor-pointer mt-1 py-3 group">
            <div className="border rounded-md text-[10px] w-4 flex items-center justify-center py-1 px-[10px] border-gray-300 text-gray-300 group-hover:text-white group-hover:border-white">
              {item.icon}
            </div>
            <div className="px-2 group-hover:text-white text-gray-300">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
