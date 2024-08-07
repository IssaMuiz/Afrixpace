import React from "react";

const commentList = () => {
  return (
    <div>
      <div className="mt-4">
        <div>
          {comments.map((comment: any) => (
            <div
              key={comment.id}
              className="flex gap-5 items-center pb-2 mb-4  ml-10"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <p className="flex flex-col break-words tablet:max-w-[300px] desktop:max-w-[500px] mobile:max-w-[370px] bg-[#616060] p-3 rounded-xl">
                {comment.comment}
                <span>
                  {new Date(comment.timestamp?.seconds * 1000).toLocaleString()}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default commentList;
