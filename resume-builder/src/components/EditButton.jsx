import React from "react";

function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue-600 box-border border border-transparent hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
    >
      Edit
    </button>
  );
}

export default EditButton;
