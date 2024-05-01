import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import FilterTypes from '../../../SideBar/Filter/Filter.types';
import { filters, remove, reset } from '../../../SideBar/Filter/FilterSlice';
import FilterChip from './FilterChip/FilterChip';
import styles from './FilterChips.module.scss';
import { ReactComponent as RatingIcon } from '../../../../../assets/star.svg';
import { ReactComponent as PreferenceIcon } from '../../../../../assets/heart.svg';
import { Box, Grid, Stack } from '@mui/material';
import FilterUtils from '../../../../../utils/FilterUtils';

interface FilterChipsProps { }

const FilterChips: React.VFC<FilterChipsProps> = () => {

  const selectedFilters = useAppSelector(filters);

  const dispatch = useAppDispatch();

  const chipRemoveHandler = (filter: FilterTypes.Filter) => {
    dispatch(remove(filter));
  };

  const filterResetHandler = () => {
    dispatch(reset());
  };

  const chipLabel = (value: string, icon: JSX.Element) => {
    return (
      <Stack direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        className={styles.content}>
        <Box
          component="span">
          <span className={styles.content}>{value}</span>
          <span className={styles.pl3}>
            {icon}
          </span>
        </Box>
      </Stack>
    )
  }

  const mapToLabel = (type: FilterTypes.FType, value: string) => {
    return type === FilterTypes.Type.SR
      ? chipLabel(value, <RatingIcon className={styles.secondaryColor} />)
      : type === FilterTypes.Type.PH
        ? chipLabel(value, <PreferenceIcon className={styles.secondaryColor} />)
        : value;
  };

  const filterChips = [...selectedFilters].sort(FilterUtils.comparator)
    .map((filter, idx) => {
      return <Grid item key={idx}>
        <FilterChip type={filter.type}
          value={filter.key}
          label={mapToLabel(filter.type, filter.key.value)}
          onDelete={chipRemoveHandler} />
      </Grid>
    });

  const displayStyle = selectedFilters.length > 0 ? styles.Block : styles.None;

  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" className={styles.FilterChips} >
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0.5} >
        {filterChips}
      </Grid>
      <Grid item className={`${styles.content} ${styles.Reset} ${displayStyle}`} >
        <span onClick={filterResetHandler}>Reset all filters</span>
      </Grid>
    </Grid>
  )
};

export default FilterChips;
