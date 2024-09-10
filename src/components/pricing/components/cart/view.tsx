import { Body } from "./components/body";
import { Button } from "./components/btn";
import { Header } from "./components/header";
import { data } from "./data.json";

export const Cart = () => {
  return (
    <div className="rounded-md grid grid-cols-3 gap-6 absolute top-48 pt-3 px-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-md relative cursor-pointer transition ease-in-out hover:z-20 hover:scale-110 bg-white border-white border-2 border-solid hover:border-blue-800"
        >
          <Header
            caption={item.caption}
            isMostPopular={item.isMostPopular}
            price={item.price}
          />

          <Body options={item.options} />

          <Button />
        </div>
      ))}
    </div>
  );
};
