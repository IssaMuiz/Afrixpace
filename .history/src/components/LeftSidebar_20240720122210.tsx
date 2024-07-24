import { useState } from "react";

interface categories {
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
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Sport",
      icon: "assets/sport icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, link1: "Football" },
        { id: 102, link2: "Basketball" },
        { id: 103, link3: "Long jump" },
      ],
    },

    {
      id: "2",
      name: "Business",
      icon: "assets/business icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, link1: "Investment" },
        { id: 102, link2: "Career" },
        { id: 103, link3: "Marketing" },
      ],
    },
    {
      id: 3,
      name: "Technology",
      icon: "assets/tech icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, link1: "Computer" },
        { id: 102, link2: "Programming" },
        { id: 103, link3: "Phones" },
      ],
    },
    {
      id: 4,
      name: "Politics",
      icon: "assets/politics icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, link1: "Computer" },
        { id: 102, link2: "Programming" },
        { id: 103, link3: "Phones" },
      ],
    },

    {
      id: 5,
      name: "Games",
      icon: "assets/games icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, link1: "Computer" },
        { id: 102, link2: "Programming" },
        { id: 103, link3: "Phones" },
      ],
    },
  ]);

  return (
    <div
      className={`w-72 desktop:flex p-10 pl-12 flex-col border-r mt-16  bg-white fixed z-0 h-full left-0 top-0 ${
        props?.displaySidenav ? "mobile:flex" : "mobile:hidden"
      }`}
    >
      {categories.map((category) => (
        <div key={category.id}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-2">
                <img
                  className="bg-gray-400 h-5 w-6"
                  src={category.icon}
                  alt=""
                />
                <div className="">{category.name}</div>
              </div>

              <div>
                <img
                  onClick={() => handleRotate(category.id)}
                  className={`h-3 w-3 ml-10 flex items-end transition-transform duration-100 cursor-pointer ${
                    category.id === active && rotate ? "rotate-180 " : ""
                  }`}
                  src={category.arrowIcon}
                  alt=""
                />
              </div>
            </div>
            {category.id === active && rotate ? (
              <ul className="ml-5 flex flex-col gap-y-2 border-l pl-2 transition-transform duration-300">
                <li>{category.dropdownLink.link1}</li>
                <li>{category.dropdownLink.link2}</li>
                <li>{category.dropdownLink.link3}</li>
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
