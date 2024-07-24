import { useState } from "react";
import Leftnav from "./Leftnav.json";

interface Leftnav {
  id: number;
  name: string;
  icon: string;
  arrowIcon: string;
  dropdownLink: {
    link1: string;
    link2: string;
    link3: string;
  };
}

type Sidenavtype = {
  displaySidenav: any;
};
const LeftSidebar = (props: Sidenavtype) => {
  const [active, setActive] = useState(null);

  const handleRotate = (id: any) => {
    setActive(id);
  };

  return (
    <div
      className={`w-72 desktop:flex p-10 pl-12 flex-col border-r mt-16  bg-white fixed z-0 h-full left-0 top-0 ${
        props?.displaySidenav ? "mobile:flex" : "mobile:hidden"
      }`}
    >
      {Leftnav.map((Leftnav) => (
        <div key={Leftnav.id}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                <img
                  className="bg-gray-400 h-5 w-6"
                  src={Leftnav.icon}
                  alt=""
                />
                <div className="">{Leftnav.name}</div>
              </div>

              <div>
                <img
                  onClick={() => handleRotate(Leftnav.id)}
                  className={`h-3 w-3 ml-10 flex items-end transition-transform duration-100 cursor-pointer ${
                    Leftnav.id === active ? "rotate-180 " : "rotate-[-180]"
                  }`}
                  src={Leftnav.arrowIcon}
                  alt=""
                />
              </div>
            </div>
            {Leftnav.id === active ? (
              <ul className="ml-5 flex flex-col gap-y-2 border-l pl-2 transition-transform duration-300">
                <li>{Leftnav.dropdownLink.link1}</li>
                <li>{Leftnav.dropdownLink.link2}</li>
                <li>{Leftnav.dropdownLink.link3}</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
