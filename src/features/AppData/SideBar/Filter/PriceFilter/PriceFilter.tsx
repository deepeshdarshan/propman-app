import React from "react";
import styles from "./PriceFilter.module.scss";
import { Checkbox, Grid, Stack, Box } from "@mui/material";
import FilterTypes from "../Filter.types";
import FilterUtils from "../../../../../utils/FilterUtils";
import ReactDOMServer from "react-dom/server";

type PriceFilterProps = {
  min: number;
  max: number;
  filters: FilterTypes.Filter[];
  onSelected: (f: FilterTypes.Filter) => void;
};

const PriceFilter: React.VFC<PriceFilterProps> = (props) => {
  const onChanged = (key: FilterTypes.KType) => {
    props.onSelected({
      type: FilterTypes.Type.PR,
      key: key,
    });
  };

  const intervals = FilterUtils.intervals(props.min,props.max);
  const priceFilters = intervals.map((interval, idx) => {
    const intervalElt =
      interval.type === FilterTypes.PriceFilter.Types.INT ? (
        <React.Fragment>
          ₹{interval.data.value[0]}&nbsp;-&nbsp;₹{interval.data.value[1]}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {interval.type.text.replace("%currsign%", "₹") + interval.data.value}
        </React.Fragment>
      );
    const id = "prFilter__" + idx;
    const intervalStr = ReactDOMServer.renderToStaticMarkup(intervalElt);
    const key: FilterTypes.KType = { order: idx, value: intervalStr };
    const fIdx = props.filters.findIndex(
      (f) => f.type === FilterTypes.Type.PR && f.key.value === intervalStr
    );
    const checked = fIdx > -1 ? true : false;
    const displayStyle = interval.type === FilterTypes.PriceFilter.Types.ERR ? styles.Hidden : styles.Visible;
    return (
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        key={idx}
      >
        <Box component="span" className={displayStyle}>
          <Checkbox
            id={id}
            value={intervalStr}
            className={styles.checkbox}
            checked={checked}
            onChange={() => onChanged(key)}
          />
        </Box>
        <Box component="span" className={styles.content}>
          <label htmlFor={id}>{intervalStr}</label>
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
        Price per night
      </Grid>
      <Grid item>{priceFilters}</Grid>
    </Grid>
  );
};

export default PriceFilter;
