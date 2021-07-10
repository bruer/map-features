import { useFilterStyles } from "../../../../../hooks";
import InputGroupContainer from "../../common/InputGroupContainer";
import InputGroupItem from "../../common/InputGroupItem";

function PropertiesFilter({ filters, setFilters }) {
  const styles = useFilterStyles(filters);
  
  return (
    <InputGroupContainer title="Properties" customStyles={styles.container}>
      <InputGroupItem
        name="title"
        title="Title"
        customStyles={styles.title}
        filters={filters}
        setFilters={setFilters}
      />
    </InputGroupContainer>
  );
}

export default PropertiesFilter;
