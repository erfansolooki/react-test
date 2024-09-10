import { IHeader } from "./types";

export function Header({ title }: IHeader) {
  return (
    <div>
      <div>
        <div className="font-bold text-3xl underline text-red-600 p-8 bg-slate-800">
          {title}
        </div>
      </div>
    </div>
  );
}
