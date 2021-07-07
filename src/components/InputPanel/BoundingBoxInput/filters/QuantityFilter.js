import { useEffect, useState } from "react";
import InputContainer from "../common/InputContainer";

function QuantityFilter({ quantity, setQuantity }) {
  const [customStyles, setStyles] = useState({});

  useEffect(() => {
    if (!quantity) {
      setStyles({ borderColor: "rgba(103, 58, 183)" });
    }
    if (quantity === "100") {
      setStyles({
        color: "#fff",
        borderColor: "transparent",
        background: "rgba(103, 58, 183, 0.5)",
      });
    }
    if (quantity === "1000") {
      setStyles({
        color: "#fff",
        borderColor: "transparent",
        background: "rgba(103, 58, 183, 0.75)",
      });
    }
    if (quantity === "10000") {
      setStyles({
        color: "#fff",
        borderColor: "transparent",
        background: "rgba(103, 58, 183, 1)",
      });
    }
  }, [quantity]);

  return (
    <InputContainer title="Quantity">
      <select
        style={customStyles}
        onChange={({ target: { value } }) => setQuantity(value)}
      >
        <option value="">All</option>
        <option value="100">100</option>
        <option value="1000">1000</option>
        <option value="10000">10000</option>
      </select>
    </InputContainer>
  );
}

export default QuantityFilter;
