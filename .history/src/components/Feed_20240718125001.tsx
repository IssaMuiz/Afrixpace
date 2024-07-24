import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Feeds from "./Feeds.json";

interface Feeds {
  name: string;
  description: string;
  image: string;
}

const Feed = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="mt-32 max-w-[1000px] tablet:mr-[10px] mx-auto desktop:ml-[100px] tablet:ml-[30px]  flex flex-3 flex-col">
      {Feeds.map((feed) => (
        <div>
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
            <div className="flex gap-10 mt-2 align-center">
              <div className="flex bg-gray-200 p-1 gap-1 w-24 items-center rounded-2xl justify-center hover:bg-gray-300">
                <img
                  className="w-5 h-5"
                  src="assets/upvote-removebg-preview.png"
                  alt=""
                />
                <p className="font-bold text-sm">1.1k</p>
                <img
                  className="w-5 h-5"
                  src="assets/downvote-removebg-preview.png"
                  alt=""
                />
              </div>
              <div className="bg-gray-200 rounded-2xl w-16 p-2 flex items-center gap-1 hover:bg-gray-300">
                <img
                  className="w-5 h-5"
                  src="assets/comment-removebg-preview.png"
                  alt=""
                />
                <p className="text-sm font-bold">2.1k</p>
              </div>
              <div className="bg-gray-200 flex p-2 rounded-2xl gap-1 hover:bg-gray-300">
                <img
                  className="w-5 h-5"
                  src="assets/share-removebg-preview.png"
                  alt=""
                />
                <p className="text-sm font-bold">Share</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
