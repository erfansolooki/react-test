import { Dispatch, SetStateAction } from "react";

export interface ITopNav {
  isShowRN: boolean;
  setIsShowRN: Dispatch<SetStateAction<boolean>>;
}
