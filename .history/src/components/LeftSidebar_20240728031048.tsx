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
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="black"
                    stroke-width="4"
                  />
                  <path
                    d="M32 2C25.3726 2 19.2822 4.26685 14.5246 7.92398L32 32L49.4754 7.92398C44.7178 4.26685 38.6274 2 32 2Z"
                    fill="black"
                  />
                  <path
                    d="M17.1546 9.39688C11.8685 13.5815 8.48615 19.9292 7.3771 27.0919L32 32L56.6229 27.0919C55.5139 19.9292 52.1315 13.5815 46.8454 9.39688L32 32L17.1546 9.39688Z"
                    fill="black"
                  />
                  <path
                    d="M2 32C2 38.6274 4.26685 44.7178 7.92398 49.4754L32 32L7.92398 14.5246C4.26685 19.2822 2 25.3726 2 32Z"
                    fill="black"
                  />
                  <path
                    d="M9.39688 46.8454C13.5815 52.1315 19.9292 55.5139 27.0919 56.6229L32 32L27.0919 7.3771C19.9292 8.48615 13.5815 11.8685 9.39688 17.1546L32 32L9.39688 46.8454Z"
                    fill="black"
                  />
                  <path
                    d="M56.6229 32C55.5139 38.6274 52.1315 44.7178 46.8454 49.4754L32 32L46.8454 14.5246C52.1315 19.2822 55.5139 25.3726 56.6229 32Z"
                    fill="black"
                  />
                  <path
                    d="M46.8454 46.8454C44.7178 44.7178 38.6274 42.451 32 42.451V32H22.5488C22.5488 38.6274 19.2822 44.7178 17.1546 46.8454L32 32L46.8454 46.8454Z"
                    fill="black"
                  />
                  <path
                    d="M17.1546 46.8454C19.2822 44.7178 25.3726 42.451 32 42.451V32H41.4512C41.4512 38.6274 44.7178 44.7178 46.8454 46.8454L32 32L17.1546 46.8454Z"
                    fill="black"
                  />
                </svg>

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
