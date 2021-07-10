import { useRef } from "react";
import { useVisibilityToggle } from "../../../../hooks";
import GeometryFilter from "./filters/GeometryFilter";
import PropertiesFilter from "./filters/PropertiesFilter";
import QuantityFilter from "./filters/QuantityFilter";

function FilterInput({
  propertiesFilters,
  geometryFilters,
  quantity,
  showFilters,
  setPropertiesFilters,
  setGeometryFilters,
  setQuantity,
}) {
  const filtersRef = useRef(null);
  const containerStyle = useVisibilityToggle(filtersRef, showFilters);

  return (
    <div style={containerStyle}>
      <div className="filter-input" ref={filtersRef}>
        <GeometryFilter
          filters={geometryFilters}
          setFilters={setGeometryFilters}
        />
        <PropertiesFilter
          filters={propertiesFilters}
          setFilters={setPropertiesFilters}
        />
        <QuantityFilter quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
}

export default FilterInput;
