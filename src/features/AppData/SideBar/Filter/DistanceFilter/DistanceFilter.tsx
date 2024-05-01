import React from 'react';
import { Checkbox, Grid, Stack, Box } from '@mui/material';
import styles from './DistanceFilter.module.scss';
import FilterTypes from '../Filter.types';
import FilterUtils from '../../../../../utils/FilterUtils';

type DistanceFilterProps = {
  min: number;
  max: number;
  step?: number
  filters: FilterTypes.Filter[];
  onSelected: (f: FilterTypes.Filter) => void;
  onDeselected: (f: FilterTypes.Filter) => void;
};

const DistanceFilter: React.VFC<DistanceFilterProps> = (props) => {

  const selectedDistance = React.useRef<string>("");

  const onChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const current = selectedDistance.current;
    if (current && current !== value)
      props.onDeselected({
        type: FilterTypes.Type.DS, key: {
          order: parseInt(current), value: current
        }
      });
    if (e.target.checked)
      props.onSelected({
        type: FilterTypes.Type.DS, key: {
          order: parseInt(value), value: value
        }
      });
    selectedDistance.current = value;
  };

  const range: number[] = FilterUtils.range(props.min, props.max, props.step ? props.step : 1);
  const distanceFilters = Array.from(range, (distance, idx) => {
    const id = "dsFilter__" + idx;
    const value = "Less than " + distance + " Km";
    const fIdx = props.filters.findIndex(f => f.type === FilterTypes.Type.DS && f.key.value === value);
    const checked = fIdx > -1 ? true : false;
    return (
      <Stack key={idx}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}>
        <Box component="span">
          <Checkbox id={id}
            value={value}
            className={styles.checkbox}
            onChange={(e) => onChanged(e)}
            checked={checked}
          />
        </Box>
        <Box component="span" className={styles.content}>
          <label htmlFor={id}>{value}</label>
        </Box>
      </Stack>
    )
  });

  return (
    <Grid container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1} >
      <Grid item className={styles.title}>
        Distance
      </Grid>
      <Grid item className={styles.pt10}>
        {distanceFilters}
      </Grid>
    </Grid>
  )
};

export default DistanceFilter;
