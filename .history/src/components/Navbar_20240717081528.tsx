import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOutUser = async () => {
    await signOut(auth);
  };

  const navLogin = () => {
    navigate("/sign-up");
  };
  return (
    <div className="left-navbar bg-black flex justify-between fixed top-0 left-0 right-0 h-16 items-center">
      <div>
        <div className="text-white text-3xl ml-8 mobile:hidden tablet:block">
          AfriXpace
        </div>
        <div className="text-white text-3xl ml-5 tablet:hidden">A</div>
      </div>
      <div className="middle-navbar flex flex-1 mx-5">
        <input
          className="h-10 w-full px-2 text-xl border rounded-l-md"
          placeholder="Search"
          type="text"
        />

        <div className="rounded-r-md h-10 w-10 bg-green-500">
          <img
            className="items-center h-6 w-6 m-auto mt-2"
            src="assets/search-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-navbar tablet:flex gap-2 overflow-hidden whitespace-nowrap mx-10  mobile:hidden">
        <div className="h-8 w-8 rounded-full bg-[#1c1e21] cursor-pointer hover:bg-gray-600">
          <img
            className="p-2"
            src="public/assets/create-removebg-preview (1).png"
            alt=""
          />
        </div>
        <div className="h-8 w-8 bg-[#1c1e21]  hover:bg-white cursor-pointer">
          <img
            className=""
            src="public/assets/noti-removebg-preview-removebg-preview.png"
            alt=""
          />
        </div>

        <div>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p className="text-white">{user?.displayName}</p>
                <button
                  onClick={signOutUser}
                  className=" border bg-gray-200 rounded-md px-1 hover:bg-gray-300"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={navLogin}
                className=" mt-2 border bg-gray-200 px-1"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mr-2">
        <img
          className="tablet:hidden h-5 w-5"
          src="assets/hamburger-menu (1).png"
          alt="hambuger-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
