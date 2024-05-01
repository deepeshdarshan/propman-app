import { Checkbox, Grid, Stack, Box } from "@mui/material";
import FilterTypes from "../Filter.types";
import styles from "./TypeFilter.module.scss";

type TypeFilterProps = {
  onSelected: (f: FilterTypes.Filter) => void;
  filters: FilterTypes.Filter[];
};

const TypeFilter = (props: TypeFilterProps) => {
  const filterValues: FilterTypes.KType[] = [
    { order: 1, value: "Vacation rentals" },
    { order: 2, value: "Hotel" },
    { order: 3, value: "Resort" },
    { order: 4, value: "Villa" },
    { order: 5, value: "Guest house" }
  ];

  const onChanged = (key: FilterTypes.KType) => {
    props.onSelected({ type: FilterTypes.Type.GN, key: key });
  };

  const typeFilters = filterValues.map((key, idx) => {
    const value = key.value;
    const fIdx = props.filters.findIndex(
      (f) => f.type === FilterTypes.Type.GN && f.key.value === value
    );
    const checked = fIdx > -1 ? true : false;
    const id = "gnFilter__" + idx;
    return (
      <Stack
        key={idx}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
      >
        <Box component="span">
          <Checkbox
            id={id}
            value={value}
            className={styles.checkbox}
            onChange={() => onChanged(key)}
            checked={checked}
          />
        </Box>
        <Box component="span" className={styles.content}>
          <label htmlFor={id}>{value}</label>
        </Box>
      </Stack>
    );
  });
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Grid item className={styles.title}>
        Property type
      </Grid>
      <Grid item>{typeFilters}</Grid>
    </Grid>
  );
};

export default TypeFilter;
