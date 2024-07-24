import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Feeds from "./Feeds.json";
import { useState } from "react";

interface Feeds {
  name: string;
  description: string;
  image: string;
}

const Feed = () => {
  const [user] = useAuthState(auth);

  const [like, setLike] = useState(0);
  const [bgColor, setBgcolor] = useState("");

  const toggleLike = () => {
    setLike((prevState) => prevState + 1);
    setBgcolor("public/assets/upvote-red-removebg-preview.png");
  };

  return (
    <div className="mt-32 max-w-[900px] tablet:mr-[320px] mx-auto desktop:ml-[300px]  tablet:ml-[30px]  flex flex-1 flex-col">
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
              <div
                className={`flex  p-1 gap-1 w-24 items-center rounded-2xl justify-center hover:bg-gray-300 `}
              >
                <svg
                  className=""
                  height="20"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10c-.24.301-.286.712-.12 1.059.167.345.516.566.901.566h2 2v3 4c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-5-2h2 2c.385 0 .734-.221.901-.566.166-.347.12-.758-.12-1.059zm2.219 9.625h-1v1 3 4h-4v-3-4-1h-1-2.919l5.919-7.399 5.919 7.399z" />
                </svg>

                <p className="font-bold text-sm">{like}</p>
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m20.901 10.566c-.167-.345-.516-.566-.901-.566h-2-2v-3-4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5 2h-2-2c-.385 0-.734.221-.901.566-.166.347-.12.758.12 1.059l8 10c.19.237.477.375.781.375s.591-.138.781-.375l8-10c.24-.301.286-.712.12-1.059zm-8.901 8.833-5.919-7.399h2.919 1v-1-3-4h4v3 4 1h1 2.919z" />
                </svg>
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
