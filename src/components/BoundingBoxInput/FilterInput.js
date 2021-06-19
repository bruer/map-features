import React from "react";

function FilterInput({ filterChecked, setFilter }) {
  return (
    <label className={`filter-input ${filterChecked ? "fill" : ""}`}>
      Filter Features
      <input
        type="checkbox"
        defaultChecked={false}
        onChange={({ target: { checked } }) => setFilter(checked)}
      />
    </label>
  );
}

export default FilterInput;
