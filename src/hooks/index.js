import { useEffect, useState } from "react";

export function useFilterStyles(filters) {
  const [container, setContainerStyle] = useState({});
  const [title, setTitleStyle] = useState({});

  useEffect(() => {
    const filtersArray = Object.entries(filters);
    const checkedFilters = filtersArray.filter(([, value]) => value);

    if (!checkedFilters.length) {
      setTitleStyle({});
      setContainerStyle({ borderColor: "rgba(103, 58, 183)" });
    }
    if (checkedFilters.length) {
      const quotient = checkedFilters.length / filtersArray.length;
      const alpha = quotient > 0.75 ? quotient : quotient + 0.15;

      setTitleStyle({ color: "#fff" });
      setContainerStyle({
        background: `rgba(103, 58, 183, ${alpha})`,
        borderColor: "transparent",
      });
    }
  }, [filters]);

  return { container, title };
}
