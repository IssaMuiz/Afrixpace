const RightSidebar = () => {
  return (
    <div className="  mobile:hidden tablet:flex mt-16 fixed desktop:flex border-l   top-0 h-[100%] right-0 bottom-0">
      <div className="mt-10 hover:bg-gray-400 py-5 cursor-pointer">
        <img
          className="h-52 w-52 ml-10"
          src="assets/Afrixpace logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSidebar;
