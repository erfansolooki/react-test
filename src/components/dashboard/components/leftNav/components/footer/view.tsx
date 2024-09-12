import tomCookImg from "./image/photo.avif";

export const Footer = () => {
  return (
    <div className="flex items-center group hover:bg-[#f1f2f318] pl-2 rounded-md cursor-pointer py-3">
      <div>
        <img
          src={tomCookImg}
          alt=""
          className="rounded-full object-cover w-8 h-8"
        />
      </div>

      <div className="px-2 text-gray-300 group-hover:text-white">Tom Cook</div>
    </div>
  );
};
