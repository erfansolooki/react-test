import { Cart } from "./components/cart";
import { Description } from "./components/description";
import { Header } from "./components/header";

export const Pricing = () => {
  return (
    <div className="bg-[#030712] rounded p-2 flex flex-col items-center h-[65vh] relative">
      <Header />
      <Description />
      <Cart />
    </div>
  );
};
