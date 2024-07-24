const CreatePost = () => {
  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center ">
        <div className="bg-white h-[500px] w-[700px] rounded-sm">
          <div className="mt-5 text-center border-b">
            <p className="text-3xl">Create Post</p>
          </div>
          <div>
            <textarea
              placeholder="Create your post"
              className="w-[650px] m-5 border"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
