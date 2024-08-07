import React, { useState } from "react";

const CommentForm = ({ btnlabel, formSubmitHandler }) => {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end border border-primary rounded-lg p-4">
        <textarea
          className="w-full focus:outline-none "
          placeholder="Leave your comment here"
          rows="5"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold "
        >
          {btnlabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
