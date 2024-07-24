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

  return (
    <div className="mt-32 max-w-[900px] tablet:mr-[320px] mx-auto desktop:ml-[300px]  tablet:ml-[30px]  flex flex-1 flex-coln whitespace-nowrap">
      {Feeds.map((feed) => (
        <div key={feed.id}>
          <hr />
          <div className=" w-full hover:bg-gray-100 hover:rounded-lg cursor-pointer p-2 mt-2">
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
                  posted by {auth.currentUser?.displayName} <span>Feb 14</span>
                </p>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">{feed.description}</div>
            <div>
              <img className="w-full rounded-lg" src={feed.image} alt="" />
            </div>
          </div>
          <div>
            <IconList />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
