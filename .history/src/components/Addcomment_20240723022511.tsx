import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const Addcomment = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div>
        <div>
          <div>{user?.photoURL}</div>
        </div>
      </div>
    </div>
  );
};

export default Addcomment;
