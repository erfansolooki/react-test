import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { IBody } from "./types";
import { ReactComponent as CloseIcon } from "./icons/CloseCircle.svg";

export const LeftNav = ({ isShowRN }: IBody) => {
  return (
    <div className="relative h-screen w-64 min-[360px]:w-80">
      {isShowRN && (
        <div className="absolute top-4 -right-12">
          <CloseIcon />
        </div>
      )}

      <div
        className={`${
          isShowRN ? "left-0" : "-left-80"
        } bg-gray-900 h-screen absolute sm:left-0 top-0 w-full p-6 transition-all z-10 overflow-y-auto`}
      >
        <Header />

        <Body />

        <Footer />
      </div>
    </div>
  );
};
