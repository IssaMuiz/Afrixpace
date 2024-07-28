import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Feeds from "./Feeds.json";
import IconList from "./IconList";

interface Feeds {
  name: string;
  description: string;
  image: string;
  expanded: boolean;
}

const Feed = () => {
  const [user] = useAuthState(auth);
  const date = new Date();

  const option = { month: "long", day: "numeric" };

  const currentDate = date.toLocaleDateString("en-US", option);

  return (
    <div className="mt-32 max-w-[900px]  tablet:mr-[320px]  desktop:ml-[300px]  tablet:ml-[30px] flex flex-1 flex-col mx-5">
      {Feeds.map((feed) => (
        <div className="mb-1" key={feed.id}>
          <hr className="mb-5" />
          <div className=" w-full cursor-pointer rounded-lg bg-[#313131]  text-white p-2 mt-2">
            <div className=" flex items-center gap-2 pt-1">
              <div className="pt-2 mt-2">
                <img
                  className="rounded-full w-10 h-10 mb-5"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="font-bold">{feed.name}</p>
                  <p className="text-blue-600 hover:underline">Follow</p>
                </div>

                <p>
                  posted by {auth.currentUser?.displayName}.
                  <span className="ml-1">{currentDate}</span>
                </p>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">{feed.description}</div>
            <div>
              <img className="w-full rounded-lg" src={feed.image} alt="" />
            </div>
          </div>
          <div className="bg-[#313131] rounded-lg mt-2">
            <IconList />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
