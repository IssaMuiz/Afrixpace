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
                className={`flex bg-gray-200  p-1 gap-1 w-24 items-center rounded-2xl justify-center hover:bg-gray-300 `}
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
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m20.901 10.566c-.167-.345-.516-.566-.901-.566h-2-2v-3-4c0-.553-.447-1-1-1h-6c-.553 0-1 .447-1 1v5 2h-2-2c-.385 0-.734.221-.901.566-.166.347-.12.758.12 1.059l8 10c.19.237.477.375.781.375s.591-.138.781-.375l8-10c.24-.301.286-.712.12-1.059zm-8.901 8.833-5.919-7.399h2.919 1v-1-3-4h4v3 4 1h1 2.919z" />
                </svg>
                <p className="text-sm font-bold">2.1k</p>
              </div>
              <div className="bg-gray-200 flex p-2 rounded-2xl gap-1 hover:bg-gray-300">
                <svg
                  height="20"
                  viewBox="0 0 20 20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m8.5 4c.27614 0 .5.22386.5.5 0 .24545778-.17687704.4496079-.41012499.49194425l-.08987501.00805575h-3c-.77969882 0-1.420449.59488554-1.49313345 1.35553954l-.00686655.14446046v8c0 .7796706.59488554 1.4204457 1.35553954 1.4931332l.14446046.0068668h8c.7796706 0 1.4204457-.5949121 1.4931332-1.3555442l.0068668-.1444558v-1c0-.2761.2239-.5.5-.5.2454222 0 .4496.1769086.4919429.4101355l.0080571.0898645v1c0 1.325472-1.0315469 2.4100378-2.3356256 2.4946823l-.1643744.0053177h-8c-1.3254816 0-2.41003853-1.0315469-2.49468231-2.3356256l-.00531769-.1643744v-8c0-1.3254816 1.03153766-2.41003853 2.33562452-2.49468231l.16437548-.00531769zm3.8776-.42218c0-.44778533.4618631-.70274151.8163008-.51603855l.0740992.04685855.0617.05301 4.4971 4.42118c.1865778.18340444.2224.46564543.1074667.68700565l-.0501667.07984435-.0572.06544-4.4971 4.42258c-.31528.3100533-.8146258.1449156-.9285862-.2465427l-.0183138-.0872573-.0053-.0823v-2.0955l-.2577.0232c-.2489.0266-.4963.0654-.7423.1164-1.53378.3183-3.01312 1.1122-4.44499 2.3907-.38943.3478-.99194.019-.92789-.5063.486252-3.98795475 2.48231514-6.23076163 5.8838529-6.60251607l.2644271-.02490393.2246-.01511zm1 1.03322v2.03152l-1.1513.07744c-1.5737.12605-2.73395.67426-3.5631 1.56852-.66903.72156-1.17827 1.72888-1.47646 3.06698 1.41552133-1.0608267 2.9105751-1.7256288 4.4876574-1.95751891l.3476026-.04395109 1.3556-.1218v2.15597l3.4462-3.38915z"
                    fill="#212121"
                  />
                </svg>
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
