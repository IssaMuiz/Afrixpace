import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

interface commentType {
  comment: any;
}
const Addcomment = (props: commentType) => {
  const [user] = useAuthState(auth);

  const [comment, setComment] = useState([]);
  const [newcomment, setNewcomment] = useState("");
  const [isExpanded, setIsexpanded] = useState(false);

  const handleComment = () => {
    if (newcomment.trim()) {
      setComment([...comment, { newcomment.length > 0 ? newcomment.slice(0, 50) : newcomment }]);
      setNewcomment("");
    }
  };
  const handleExpanded = () => {
    setIsexpanded(!isExpanded);
  };
  return (
    <div className="mb-2 mx-2">
      {props.comment && (
        <div>
          <div className="flex items-center gap-5 justify-between">
            <div className="">
              <img
                className="w-10 h-10 rounded-full "
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="max-w-[500px] flex-1">
              <input
                value={newcomment}
                onChange={(e) => setNewcomment(e.target.value)}
                placeholder="comment"
                className="w-full border p-1 flex-1 rounded-md"
                type="text"
              />
            </div>
            <div className="bg-blue-600 rounded-lg hover:bg-blue-400">
              <button onClick={handleComment} className="text-white p-2 ">
                Add comment
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div>
              {comment.map((comments) => (
                <div>{comments}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addcomment;
