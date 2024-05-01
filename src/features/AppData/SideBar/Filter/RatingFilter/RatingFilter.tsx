import React from 'react';
import styles from './RatingFilter.module.scss';
import { ReactComponent as RatingIcon } from '../../../../../assets/star.svg';
import FilterUtils from '../../../../../utils/FilterUtils';
import { Box, Grid, Stack } from '@mui/material';
import FilterTypes from '../Filter.types';

type RatingFilterProps = {
  min: number;
  max: number;
  filters: FilterTypes.Filter[];
  onSelected: (f: FilterTypes.Filter) => void;
};

interface Rating {
  rating: number;
  selected: boolean;
};

const RatingFilter: React.VFC<RatingFilterProps> = (props) => {

  const onClicked = (rating: number) => {
    props.onSelected({
      type: FilterTypes.Type.SR, key: {
        order: rating, value: rating.toString()
      }
    });
  };

  const range: number[] = FilterUtils.range(props.min, props.max, 1);

  const ratingFilters = Array.from(range, (rating, idx) => {
    const fIdx = props.filters.findIndex(f => f.type === FilterTypes.Type.SR && f.key.value === rating.toString());
    const selected = fIdx > -1 ? true : false;
    const stratBgStyle = `${styles.ratingBlock} ${selected && styles.bgSelectedColor}`;
    const stratTxtStyle = selected ? styles.txtSelectedColor : styles.txtDefaultColor
    const stratIconStyle = selected ? styles.fillSelectedColor : styles.fillDefaultColor
    return (
      <Box key={idx}
        component="span"
        className={stratBgStyle}
        onClick={() => onClicked(rating)}>
        <span className={stratTxtStyle}>{rating}</span>
        <span className={styles.pl3}>
          <RatingIcon className={stratIconStyle} />
        </span>
      </Box>
    );
  });

  return (
    <Grid container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2} >
      <Grid item className={styles.title}>Star category</Grid>
      <Grid item className={styles.pt10}>
        <Stack direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          className={styles.content}>
          {ratingFilters}
        </Stack>
      </Grid>
    </Grid>
  )
};

export default RatingFilter;