import { useState } from "react";
import { LeftNav } from "./components/leftNav";
import { TopNav } from "./components/topNav";

export const Dashboard = () => {
  const [isShowRN, setIsShowRN] = useState<boolean>(false);

  return (
    <div className="w-screen">
      <LeftNav isShowRN={isShowRN} />

      <TopNav isShowRN={isShowRN} setIsShowRN={setIsShowRN} />
    </div>
  );
};
