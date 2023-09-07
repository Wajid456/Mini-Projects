import { IoMdSend } from "react-icons/io";
import { useState } from "react";

const Comment = () => {
  const [count, setCount] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [getVal, setGetVal] = useState([]);

  // comment adding in row functionality
  const showData = (comment) => {
    setGetVal([...getVal, { comment, id: getVal.length++ }]);
  };

  // comment form submit functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    showData(inputVal);
    setInputVal("");
    setCount(count + 1);
  };

  // comment deleted functionality
  const deleteComment = (id) => {
    const newVal = getVal;
    newVal.splice(id, 1);
    setGetVal([...newVal]);
    setCount(count - 1);
  };

  return (
    <div className="">
      <h1 className="text-3xl m-11">5.Facbook Comment:</h1>
      <div className=" w-[25rem] h-[30rem] m-3">
        <button
          onClick={() => {
            setShowInput(!showInput);
          }}
          className="px-5 py-1 m-5 text-lg bg-gray-100 border border-gray-100 rounded"
        >
          Comments {count}
        </button>{" "}
        <br />
        {/* jsx for form */}
        {showInput && (
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
              type="text"
              placeholder="Comment...!"
              className="m-5 border border-gray-500 px-[3rem] py-2 rounded-full "
              value={inputVal}
            />
            <button type="submit" className={`mx-[-3.5rem]`}>
              <IoMdSend
                className={`my-[-8px] text-3xl text-[blue] ${
                  inputVal === "" ? `hidden` : `block`
                }`}
              />
            </button>
          </form>
        )}
        {/* Show Comments */}
        {showInput &&
          getVal.map((val, id) => {
            return (
              <div key={id}>
                <p className="p-3 m-5 bg-gray-200 rounded">{val.comment}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
