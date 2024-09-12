import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const LeftNav = () => {
  return (
    <div className="bg-gray-900 h-screen fixed left-0 top-0 w-80 p-6">
      <Header />

      <Body />

      <Footer />
    </div>
  );
};
