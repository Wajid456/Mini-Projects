import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

const Like = () => {
  const [like, setLike] = useState(true);
  const [count, setCount] = useState(0);

  const btnLike = () => {
    setLike(!like);
    like ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <div>
      <h1 className="m-5 text-3xl">1.Like Button:</h1>
      <div>
        <button className="flex gap-5 px-5 py-1 m-5 rounded bg-slate-50">
          {like ? (
            <AiOutlineLike onClick={btnLike} className="text-3xl " />
          ) : (
            <AiFillLike onClick={btnLike} className="text-3xl  text-[blue]" />
          )}{" "}
          <h1 className="">{count}</h1>
        </button>
      </div>
    </div>
  );
};

export default Like;
