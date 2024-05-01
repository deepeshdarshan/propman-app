import { Checkbox, Grid, Stack, Box } from "@mui/material";
import React from "react";
import FilterTypes from "../Filter.types";
import styles from "./GeneralFilter.module.scss";

type GeneralFilterProps = {
  onSelected: (f: FilterTypes.Filter) => void;
  filters: FilterTypes.Filter[];
};

const GeneralFilter: React.VFC<GeneralFilterProps> = (props) => {
  const filterValues: FilterTypes.KType[] = [
    { order: 1, value: "Breakfast included" },
    { order: 2, value: "Fully refundable" },
    { order: 3, value: "Reserve now, pay later" },
    { order: 4, value: "Pool" },
    { order: 5, value: "Pet friendly" },
    { order: 6, value: "Wifi included" },
  ];

  const onChanged = (key: FilterTypes.KType) => {
    props.onSelected({ type: FilterTypes.Type.GN, key: key });
  };

  const generalFilters = filterValues.map((key, idx) => {
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
        Popular filters
      </Grid>
      <Grid item>{generalFilters}</Grid>
    </Grid>
  );
};

export default GeneralFilter;
