import { useState } from "react";
import images from "../../../image/imageGalery";

const NavMobile = ({ open }) => {
  const [menu, setMenu] = useState("");
  const handleMenu = (title) => {
    if (title === menu) {
      setMenu("");
      return;
    }
    setMenu(title);
  };
  const NAVMENU = [
    {
      title: "Categories",
      subTitle: [
        "Books",
        "Books On Indonesia",
        "Academic Books",
        "Magazine",
        "Stationery",
        "Travel Accessories",
        "Toys",
        "Greeting Card",
        "Gift Voucher",
      ],
    },
    {
      title: "New Realese",
    },
    {
      title: "Pre Orders",
      subTitle: [
        "Books",
        "Books On Indonesia",
        "Academic Books",
        "Magazine",
        "Stationery",
        "Travel Accessories",
        "Toys",
        "Greeting Card",
        "Gift Voucher",
      ],
    },
  ];
  return (
    <div
      className={`transition-max-height duration-300 ease-in-out ${
        open ? "max-h-screen" : "max-h-0 overflow-hidden"
      }`}
    >
      {NAVMENU?.map((item, i) => (
        <div key={i}>
          <div
            className="flex items-center gap-x-3 py-1"
            onClick={() => handleMenu(item?.title)}
          >
            <p className="hover:text-yellow-500 transition-colors duration-300 text-sm">
              {item?.title}
            </p>
            {item?.subTitle && (
              <img
                src={images?.arrownav}
                alt=""
                className={`${
                  menu === item?.title ? "rotate-90" : ""
                } h-3 w-3 transition-transform duration-300`}
              />
            )}
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              menu === item?.title ? "max-h-40" : "max-h-0"
            } ml-4`}
          >
            {item?.subTitle?.map((subItem, j) => (
              <div
                key={j}
                className="text-gray-800 text-xs py-0.5 hover:text-yellow-500 transition-colors duration-300"
              >
                {subItem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default NavMobile;
