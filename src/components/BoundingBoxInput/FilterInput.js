import React from "react";

function FilterInput({ input, filterChecked }) {
  return (
    <label className={`filter-input ${filterChecked ? "fill" : ""}`}>
      Filter Features
      <input type="checkbox" defaultChecked={false} onChange={input} />
    </label>
  );
}

export default FilterInput;
