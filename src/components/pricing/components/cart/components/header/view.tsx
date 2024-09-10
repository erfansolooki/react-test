import { IHeaderCart } from "./types";

export const Header = ({ caption, price, isMostPopular }: IHeaderCart) => {
  return (
    <div>
      {isMostPopular && (
        <div className="bg-blue-800 w-fit m-auto font-medium text-[10px] rounded-full py-1 px-2 absolute -top-4 left-0 right-0">
          MOST POPULAR
        </div>
      )}

      <div className="text-zinc-950 text-2xl font-medium pt-8">{caption}</div>

      <div className="flex align-top justify-center pt-2">
        <span className="text-zinc-950 text-2xl font-medium">$</span>

        <span className="text-zinc-950 text-3xl font-bold px-1">{price}</span>

        <span className="text-zinc-700 font-medium">/month</span>
      </div>
    </div>
  );
};
