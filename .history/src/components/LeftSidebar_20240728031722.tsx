/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";

type Sidenavtype = {
  displaySidenav: any;
};
const LeftSidebar = (props: Sidenavtype) => {
  const [categories, setCategories] = useState([
    {
      id: "1",
      name: "Sport",
      icon: "public/assets/sport_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Football", link: "/football" },
        { id: 102, name: "Basketball", link: "/basketball" },
        { id: 103, name: "Long jump", link: "/long-jump" },
      ],
    },

    {
      id: "2",
      name: "Business",
      icon: "assets/business_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Investment", link: "/investment" },
        { id: 102, name: "Career", link: "/career" },
        { id: 103, name: "Marketing", link: "/marketing" },
      ],
    },
    {
      id: 3,
      name: "Technology",
      icon: "assets/tech_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Computer", link: "/computer" },
        { id: 102, name: "Programming", link: "/programming" },
        { id: 103, name: "Phones", link: "/phones" },
      ],
    },
    {
      id: 4,
      name: "Politics",
      icon: "assets/politics_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "National politics", link: "/nat-politics" },
        { id: 102, name: "International politics", link: "/int-politics" },
      ],
    },

    {
      id: 5,
      name: "Games",
      icon: "assets/games_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Action", link: "/action-games" },
        { id: 102, name: "Adventure", link: "/adventure-games" },
        { id: 103, name: "Console", link: "/console-games" },
        { id: 103, name: "Mobile", link: "/mobile-games" },
        { id: 103, name: "Game Review", link: "/game-review" },
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
      className={`w-72 desktop:flex p-10 pl-12 flex-col border-r mt-16  fixed z-0 h-full left-0 overflow-scroll top-0 ${
        props?.displaySidenav ? "mobile:flex" : "mobile:hidden"
      }`}
    >
      {categories.map((category) => (
        <div key={category.id}>
          <div className="mb-8 border-b">
            <div className="flex text-white justify-between items-center mb-3 hover:bg-gray-200 cursor-pointer rounded-lg p-2 w-full ">
              <div className="flex gap-2 ">
                <img
                  className=" h-6 w-6 bg-green-400 rounded-sm"
                  src={category.icon}
                  alt=""
                />
                <div className="">{category.name}</div>
              </div>

              <div>
                <img
                  onClick={() => handleToggle(category.id)}
                  className={`h-3 w-3 ml-10 flex items-end transition-transform duration-100 cursor-pointer ${
                    category.expanded && "rotate-180 "
                  }`}
                  src={category.arrowIcon}
                  alt=""
                />
              </div>
            </div>
            <div>
              {category.expanded && (
                <div className="border-l">
                  {category.dropdownLink.map((dropDownlink) => (
                    <Link
                      to={dropDownlink.link}
                      className="ml-5 flex flex-col gap-y-2  p-2 transition-transform duration-300 mb-5 hover:bg-gray-200 rounded-lg cursor-pointer"
                    >
                      {dropDownlink.name}
                    </Link>
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
