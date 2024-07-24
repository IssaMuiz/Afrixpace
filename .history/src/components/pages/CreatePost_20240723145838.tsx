const CreatePost = () => {
  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center ">
        <div className="bg-white h-[550px] w-[500px] rounded-sm">
          <div className="flex flex-col items-center mt-5 ">
            <h1 className="text-3xl font-bold text-green-700 mt-5">
              AfriXpace
            </h1>
            <p className="mt-2">Unifications of Africa</p>
          </div>

          <div className="flex flex-col mt-10 px-20">
            <h1 className="text-xl font-bold">Sign Up</h1>
            <p className="text-sm text-zinc-500 mb-5">
              By continuing, you agree to our
              <span className="text-blue-400 hover:underline cursor-pointer">
                User Agreement
              </span>
              and acknowledge that you understand the
              <span className="text-blue-400 hover:underline cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
