import { Autocomplete, Grid, TextField } from '@mui/material';
import React from 'react';
import FilterTypes from '../Filter.types';
import styles from './NameFilter.module.scss';

type NameFilterProps = {
  hotelNames: string[];
  filters: FilterTypes.Filter[];
  onSelected: (f: FilterTypes.Filter) => void;
  onDeselected: (f: FilterTypes.Filter) => void;
};

const NameFilter: React.VFC<NameFilterProps> = (props) => {

  let filterRef = React.useRef<string>("");

  const hnFilter = props.filters.find(f => f.type === FilterTypes.Type.HN);
  const filterValue = hnFilter ? hnFilter.key.value : "";

  const onChanged = (_: any, value: any) => {
    const key = { order: 1, value: value ? value : filterRef.current };
    const selectedFilter: FilterTypes.Filter = { type: FilterTypes.Type.HN, key: key };
    if (value) {
      filterRef.current = value;
      props.onSelected(selectedFilter);
    }
    else props.onDeselected(selectedFilter);
  };

  return (
    <Grid container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}>
      <Grid item className={styles.title}>Property name</Grid>
      <Grid item style={{width: "96%"}}>
        <Autocomplete freeSolo
          ref={filterRef}
          options={props.hotelNames}
          renderInput={(params) => <TextField {...params} />}
          onChange={onChanged}
          value={filterValue} />
      </Grid>
    </Grid>
  )
};

export default NameFilter;