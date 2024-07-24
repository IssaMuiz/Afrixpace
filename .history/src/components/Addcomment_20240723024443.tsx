import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex items-center gap-5 justify-between">
        <div className="">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <div className="max-w-[500px] flex-1">
          <input
            placeholder="comment"
            className="w-full border p-1 flex-1"
            type="text"
          />
        </div>
        <div className="bg-blue-400 rounded-lg">
          <p className="text-white p-2">Add comment</p>
        </div>
      </div>
    </div>
  );
};

export default Addcomment;
