import React from "react";

function InputGroupItem({ name, title, customStyles, filters, setFilters }) {
  return (
    <li>
      <label style={customStyles}>
        {title}
        <input
          type="checkbox"
          name={name}
          onChange={({ target: { name, checked } }) =>
            setFilters({ ...filters, [name]: checked })
          }
        />
      </label>
    </li>
  );
}

export default InputGroupItem;
