import { useState } from "react";

const CreatePost = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event: any) => {
    const file = event?.target.file[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center ">
        <div className="bg-white h-[500px] w-[700px] rounded-sm">
          <div className="mt-5 text-center border-b pb-3">
            <p className="text-3xl">Create Post</p>
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              placeholder="Create your post"
              className="w-[660px] m-5 outline-none mb-20 border hidden"
              name=""
              id=""
            ></input>
          </div>
          <div>{image && <img src={image} alt="" />}</div>
          <div className="flex flex-row justify-between mx-5 items-center">
            <div>
              <svg
                onClick={handleImageUpload}
                className="cursor-pointer"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
              </svg>
            </div>
            <button className="bg-blue-600 p-2 rounded-xl font-bold w-20 hover:bg-blue-500 text-white">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
