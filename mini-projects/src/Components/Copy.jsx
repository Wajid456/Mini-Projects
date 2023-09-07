import React from "react";
import { useState } from "react";

const Copy = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState(true);
  const [copytxt, setCopyText] = useState(true);

  const textValue = (e) => {
    setValue(e.target.value);
  };

  const copyText = () => {
    navigator.clipboard.writeText(value);
    setText(!text);
  };

  const copyTxt = () => {
    navigator.clipboard.writeText(txt);
    setCopyText(!copytxt);
  };

  const txt =
    "This is a lot easier than having to select the entire line of text, then click Control+C or Command+C to copy it. It also prevents you from";

  return (
    <div>
      <div>
        <h1 className="mx-8 my-5 text-2xl">3.Copy Text:</h1>
      </div>

      <h1 className="mx-6 text-xl underline">Text Copy:</h1>
      <div className="bg-gray-200 w-[22rem] mx-5 ">
        <button
          onClick={copyTxt}
          className="bg-gray-800 px-5 rounded-3xl text-white mx-[13rem] my-1 "
        >
          {copytxt ? "Copy" : "Copied"}
        </button>
        <h2 className="w-[20rem] mx-5 my-2">{txt}</h2>
      </div>

      <h1 className="mx-6 my-5 text-xl underline">Input Text Copy:</h1>
      <input
        type="text"
        value={value}
        onChange={textValue}
        className="px-8 mx-3 my-1 text-black bg-gray-100 border border-black rounded-full"
      />
      <button
        onClick={copyText}
        className="px-5 text-white bg-gray-800 rounded-3xl "
      >
        {text ? "Copy" : "Copied"}
      </button>
    </div>
  );
};

export default Copy;
