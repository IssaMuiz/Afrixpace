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
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 80"
                  x="0px"
                  y="0px"
                >
                  <g>
                    <path d="M11.87,17.34l5,2.77L21.48,18l1-5.24L18.3,8.19l.58-1a16.76,16.76,0,0,0-8.65,3.7l.88.17Z" />
                    <path d="M28.23,9.34l-.09-.77L28,8.51c-.47-.21-1-.41-1.44-.58l-.19-.06a16.86,16.86,0,0,0-3.28-.73H23c-.54-.06-1.08-.09-1.62-.1h-.11l-.48.87L24,11.33Z" />
                    <path d="M6.32,30l6.29,1,3.86-4-.63-5.17-4.93-2.74-5.78,2.7-.84-.9a16.92,16.92,0,0,0,1.35,10.4Z" />
                    <path d="M9.86,17.38,9.3,12.7l-.83-.16-.1.11c-.35.38-.68.78-1,1.2L7.25,14c-.31.43-.61.87-.88,1.33l0,0c-.27.46-.51.93-.74,1.42L5.5,17q-.31.7-.56,1.43l0,.13.71.76Z" />
                    <path d="M4.18,47c.57.45,1.18,1,1.88,1.7S7.87,50.39,9,51.31V42.69c-1.13.92-2.11,1.84-2.93,2.62S4.75,46.55,4.18,47Z" />
                    <path d="M35.53,22.79a17.21,17.21,0,0,1,2.29-1.16c0-.29-.08-.58-.13-.87s-.07-.29-.1-.43c-.07-.3-.13-.6-.21-.89s-.11-.34-.16-.51-.16-.53-.26-.78-.14-.35-.21-.53-.15-.37-.24-.56L35.82,17l-2,4.27Z" />
                    <polygon points="17.86 21.85 18.43 26.52 23.05 27.42 25.33 23.3 22.12 19.86 17.86 21.85" />
                    <path d="M24.44,13.31l-1,5L26.84,22l5.1-1.34,2.67-5.82.74.09a16.45,16.45,0,0,0-5.06-5.14l.09.77Z" />
                    <path d="M27.43,35.1a17.41,17.41,0,0,1,4.89-9.78A17.59,17.59,0,0,1,33.85,24l-1.48-1.36L27.26,24l-2.44,4.39,2,6.72Z" />
                    <path d="M12.82,37.55l-.74-4.65-4.64-.73-.6,1.18c.18.27.36.54.56.8s.22.32.35.47A17,17,0,0,0,9,36a16.74,16.74,0,0,0,1.38,1.23c.16.13.32.24.49.36s.52.38.79.55Z" />
                    <polygon points="46.06 46.81 46.66 47.61 46.07 46.8 46.06 46.81" />
                    <path d="M59.75,34.92c0-.05,0-.11,0-.16s-.07-.33-.11-.5-.11-.47-.17-.71-.1-.34-.15-.51-.15-.45-.23-.67l-.19-.5q-.13-.33-.28-.65l-.23-.48c-.11-.21-.22-.42-.34-.63l-.26-.45c-.13-.21-.27-.42-.4-.63l-.27-.41c-.16-.22-.33-.44-.5-.65l-.26-.33c-.27-.31-.55-.62-.84-.91s-.6-.57-.91-.84l-.32-.25c-.22-.17-.43-.35-.66-.51l-.4-.27-.63-.41-.45-.25-.64-.34L51,23.64l-.66-.29-.48-.19-.69-.23-.49-.15-.74-.18-.47-.1-.17,0A11.58,11.58,0,0,0,59.75,34.92Z" />
                    <path d="M29.41,35.33A25.82,25.82,0,0,1,35,36.81v-.05l1.41.65h0a26,26,0,0,1,4.16,2.42l.42.3v0a45.13,45.13,0,0,1,4.29,3.68,24.54,24.54,0,0,0,2,1.75,1.72,1.72,0,0,1,0,2.83,24.61,24.61,0,0,0-2,1.75c-.83.79-1.82,1.71-3,2.65l.58.09a15.31,15.31,0,0,0,11.85-3.74L33.06,27.47A15.4,15.4,0,0,0,29.41,35.33Z" />
                    <path d="M58.87,37A13.55,13.55,0,0,1,45.34,22.27a15.25,15.25,0,0,0-10.86,3.8L56.16,47.75A15.26,15.26,0,0,0,60,36.91Q59.42,37,58.87,37Z" />
                    <path d="M45.81,47c-.57-.46-1.19-1-1.9-1.71S42.12,43.6,41,42.68v8.64c1.12-.92,2.09-1.83,2.91-2.61S45.24,47.45,45.81,47Z" />
                    <path d="M38.22,40.67l-.44-.27-.55-.32L37,40V54l.25-.14.54-.31.45-.27.53-.34.25-.17V41.18L38.76,41Z" />
                    <path d="M12.21,40.4l-.45.28-.53.34-.24.16V52.81l.24.16.53.34.45.27.54.32L13,54V40l-.25.14Z" />
                    <path d="M15,36.81A27.17,27.17,0,0,1,24.73,35l-1.66-5.55-5.2-1L14,32.38l.71,4.49.26-.12Z" />
                    <path d="M15,39V55a25,25,0,0,0,10,2,25,25,0,0,0,10-2V39a25,25,0,0,0-10-2A25,25,0,0,0,15,39Zm11,5v2h2V44a1,1,0,0,1,2,0v2h1a1,1,0,1,1,0,2H30v2a1,1,0,0,1-2,0V48H26v2a1,1,0,0,1-2,0V48H22v2a1,1,0,0,1-2,0V48H19a1,1,0,0,1,0-2h1V44a1,1,0,0,1,2,0v2h2V44a1,1,0,0,1,2,0Z" />
                  </g>
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
