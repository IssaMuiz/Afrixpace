import { useState } from "react";

interface categories {
  id: number;
  name: string;
  icon: string;
  arrowIcon: string;
  dropdownLink: {
    name: string;
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
      icon: "assets/sport_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Football" },
        { id: 102, name: "Basketball" },
        { id: 103, name: "Long jump" },
      ],
    },

    {
      id: "2",
      name: "Business",
      icon: "assets/business icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Investment" },
        { id: 102, name: "Career" },
        { id: 103, name: "Marketing" },
      ],
    },
    {
      id: 3,
      name: "Technology",
      icon: "assets/tech icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Computer" },
        { id: 102, name: "Programming" },
        { id: 103, name: "Phones" },
      ],
    },
    {
      id: 4,
      name: "Politics",
      icon: "assets/politics icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Computer" },
        { id: 102, name: "Programming" },
        { id: 103, name: "Phones" },
      ],
    },

    {
      id: 5,
      name: "Games",
      icon: "assets/games icon.png",
      arrowIcon: "assets/arrow icon.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Computer" },
        { id: 102, name: "Programming" },
        { id: 103, name: "Phones" },
      ],
    },
  ]);

  const handleToggle = (id: any) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? {
              ...category,
              expanded: !category.expanded,
            }
          : category
      )
    );
  };

  return (
    <div
      className={`w-72 desktop:flex p-10 pl-12 flex-col border-r mt-16  bg-white fixed z-0 h-full left-0 overflow-scroll top-0 ${
        props?.displaySidenav ? "mobile:flex" : "mobile:hidden"
      }`}
    >
      {categories.map((category) => (
        <div key={category.id}>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3 hover:bg-gray-200 cursor-pointer rounded-lg p-3 w-full">
              <div className="flex gap-2 ">
                <img
                  className="bg-gray-400 h-5 w-6"
                  src={category.icon}
                  alt=""
                />
                <div className="">{category.name}</div>
              </div>

              <div>
                <img
                  onClick={() => handleToggle(category.id)}
                  className={`h-3 w-3 ml-10 flex items-end transition-transform duration-100 bg-gray-200 cursor-pointer ${
                    category.expanded && "rotate-180 "
                  }`}
                  src={category.arrowIcon}
                  alt=""
                />
              </div>
            </div>
            <div>
              {category.expanded && (
                <div>
                  {category.dropdownLink.map((dropDownlink) => (
                    <div className="ml-5 flex flex-col gap-y-2 border-l pl-2 transition-transform duration-300">
                      {dropDownlink.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
