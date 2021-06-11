import React from "react";

function FilterInput({ handleInput, filterChecked }) {
  const fill = { background: "#f44336", borderColor: "#f44336", color: "#fff" };

  return (
    <div className="filter-input">
      <label style={filterChecked ? fill : null}>
        Filter Features
        <input type="checkbox" defaultChecked={false} onChange={handleInput} />
      </label>
    </div>
  );
}

export default FilterInput;
