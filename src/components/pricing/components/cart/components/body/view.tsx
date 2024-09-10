import { IBodyCart } from "./types";
import { ReactComponent as CheckIcon } from "./icons/tick.svg";

export const Body = ({ options }: IBodyCart) => {
  return (
    <div className="mt-10 mb-14 pl-4">
      {options.map((option, idx) => (
        <div key={idx} className="flex items-start mt-3">
          <div className="flex pr-3">{<CheckIcon />}</div>
          <p className="text-neutral-700 text-start text-sm">{option}</p>
        </div>
      ))}
    </div>
  );
};
