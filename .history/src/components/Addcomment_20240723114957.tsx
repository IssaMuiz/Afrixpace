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
          <div className="flex items-center gap-5 justify-between bg-gray-200 p-2 rounded-md">
            <div className="">
              <img
                className="w-10 h-10 rounded-full "
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="max-w-[500px] flex-1">
              <input
                value={props.newcomment}
                onChange={(e) => props.setnewcomment(e.target.value)}
                placeholder="comment"
                className="w-full border p-1 flex-1 rounded-md"
                type="text"
              />
            </div>
            <div className="bg-blue-600 rounded-lg hover:bg-blue-400">
              <button onClick={props.handlecomment} className="text-white p-2 ">
                Add comment
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div>
              {props.comment.map((comments) => (
                <div className="flex gap-5 items-center pb-2 mb-4 border-b ml-10">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                  <p className="break-words tablet:w-[300px] desktop:w-[500px] mobile:w-[400px]">
                    {comments}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addcomment;
