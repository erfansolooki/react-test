import { useEffect, useState } from "react";
import { LeftNav } from "./components/leftNav";
import { TopNav } from "./components/topNav";

export const Dashboard = () => {
  const [isShowRN, setIsShowRN] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsShowRN(true);
    }
  }, [window.innerWidth]);

  return (
    <div className="w-screen">
      <LeftNav isShowRN={isShowRN} setIsShowRN={setIsShowRN} />

      <TopNav isShowRN={isShowRN} setIsShowRN={setIsShowRN} />
    </div>
  );
};
