import React from "react";
import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";

const Password = () => {
  const [icon, setIcon] = useState(true);
  const [type, setType] = useState("password");

  const hideShow = () => {
    setIcon(!icon);
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div>
      <h1 className="mx-[2rem] my-3 text-2xl">2.Show/Hide Password:</h1>

      <div className="m-5">
        <input
          type={type}
          className="border border-black bg-gray-100 rounded-full  px-5 py-2"
        />

        <button className="bg-gray-200 px-5 py-1 mx-5 rounded">
          {icon ? (
            <BiHide onClick={hideShow} className="text-lg" />
          ) : (
            <BiShow onClick={hideShow} className="text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Password;
