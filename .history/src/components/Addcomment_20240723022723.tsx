import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="flex">
        <div>
          <img src={user?.photoURL} alt="" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Addcomment;
