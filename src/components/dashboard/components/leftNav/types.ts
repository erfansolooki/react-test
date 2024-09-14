import { Dispatch, SetStateAction } from "react";

export interface IBody {
  isShowRN: boolean;
  setIsShowRN: Dispatch<SetStateAction<boolean>>;
}
