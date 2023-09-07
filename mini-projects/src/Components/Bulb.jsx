import React from "react";
import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";
import { useState } from "react";

const Bulb = () => {
  const [bulb, setBulb] = useState(true);

  const bulbLight = () => {
    setBulb(!bulb);
  };

  return (
    <div>
      <h1 className="m-5 text-3xl">4.Bulb On/Off:</h1>
      <div>
        <h1>
          {bulb ? (
            <BsLightbulb className=" my-[2rem] mx-[4rem] text-9xl " />
          ) : (
            <BsLightbulbFill className="my-[2rem] mx-[4rem] text-9xl text-[yellow] " />
          )}
        </h1>
      </div>

      <div className="my-[2rem]">
        <button
          onClick={bulbLight}
          className={` ${bulb ? `bg-[green]` : `bg-[red]`} text-xl border  ${
            bulb ? `border-[green]` : `border-[red]`
          } px-[2rem] rounded text-white mx-[5rem]`}
        >
          {bulb ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};

export default Bulb;
