/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

interface commentType {
  showComment: any;
  comment: any;
  newcomment: any;
  handlecomment: any;
  setnewcomment: any;
}
const Addcomment = (props: commentType) => {
  const [user] = useAuthState(auth);

  return (
    <div className="mb-2 mx-2">
      {props.showComment && (
        <div>
          <div className="flex items-center gap-5 justify-between rounded-md">
            <div className="">
              <img
                className="w-10 h-10 rounded-full "
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="max-w-[500px] text-white flex-1">
              <textarea
                value={props.newcomment}
                onChange={(e) => props.setnewcomment(e.target.value)}
                placeholder="Type your text..."
                className="w-full border p-1 flex-1 rounded-lg focus:outline-none resize-none bg-[#616060]"
              />
            </div>
            <div className="bg-green-600 rounded-lg hover:bg-green-400">
              <button onClick={props.handlecomment} className="text-white p-2 ">
                Add comment
              </button>
            </div>
          </div>
          <div className="mt-4">
            <ul>
              {props.comment.map((comments: any) => (
                <li
                  key={comments.id}
                  className="flex gap-5 items-center pb-2 mb-4  ml-10"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <p className="break-words tablet:max-w-[300px] desktop:max-w-[500px] mobile:max-w-[370px] bg-[#616060] p-3 rounded-xl">
                    {comments.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addcomment;
