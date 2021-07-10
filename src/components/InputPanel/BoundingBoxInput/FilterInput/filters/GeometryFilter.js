import { useFilterStyles } from "../../../../../hooks";
import InputGroupContainer from "../../common/InputGroupContainer";
import InputGroupItem from "../../common/InputGroupItem";

function GeometryFilter({ filters, setFilters }) {
  const styles = useFilterStyles(filters);

  return (
    <InputGroupContainer title="Geometry" customStyles={styles.container}>
      <InputGroupItem
        name="points"
        title="Points"
        customStyles={styles.title}
        filters={filters}
        setFilters={setFilters}
      />
      <InputGroupItem
        name="polylines"
        title="Polylines"
        customStyles={styles.title}
        filters={filters}
        setFilters={setFilters}
      />
      <InputGroupItem
        name="polygons"
        title="Polygons"
        customStyles={styles.title}
        filters={filters}
        setFilters={setFilters}
      />
    </InputGroupContainer>
  );
}

export default GeometryFilter;
