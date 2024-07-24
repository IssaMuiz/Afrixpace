import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

type emailType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emailSignup: any;
};

const EmailSignup = (props: emailType) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigupWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error();
    }
  };

  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-28 sm:my-2 sm:w-full sm:max-w-lg">
              <div className="bg-white w-[450px] px-5 pb-4 pt-2 sm:p-6 sm:pb-2">
                <div className="sm:items-start flex flex-col">
                  <h1
                    onClick={() => props?.emailSignup(false)}
                    className="ml-auto cursor-pointer bg-gray-200 p-1 rounded-full"
                  >
                    X
                  </h1>
                  <h1 className="font-bold text-2xl">Signup with Email</h1>
                  <label className="mt-4" htmlFor="">
                    Email:
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 w-full p-2"
                    placeholder="Your email"
                    type="text"
                    value={email}
                  />
                  <label className="mt-4" htmlFor="">
                    Password:
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 p-2"
                    placeholder="Your password"
                    type="password"
                    value={password}
                  />
                  <div className="ml-auto">
                    <button
                      onClick={SigupWithEmail}
                      className="bg-green-500 text-white mt-5 p-2 rounded-md hover:bg-green-400"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default EmailSignup;
