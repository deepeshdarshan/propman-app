import React from 'react';
import styles from './PreferenceFilter.module.scss';
import { ReactComponent as PreferenceIcon } from '../../../../../assets/heart.svg';
import FilterUtils from '../../../../../utils/FilterUtils';
import { Box, Stack, Grid } from '@mui/material';
import FilterTypes from '../Filter.types';

type PreferenceFilterProps = {
  min: number;
  max: number;
  filters: FilterTypes.Filter[];
  onSelected: (f: FilterTypes.Filter) => void;
};

interface Preference {
  preference: number;
  selected: boolean;
};

const PreferenceFilter: React.VFC<PreferenceFilterProps> = (props) => {

  const onClicked = (preference: number) => {
    props.onSelected({ type: FilterTypes.Type.PH, key: { order: preference, value: preference.toString() } });
  };

  const range: number[] = FilterUtils.range(props.min, props.max, 1);

  const preferenceBlock = Array.from(range, (preference, idx) => {
    const fIdx = props.filters.findIndex(f => f.type === FilterTypes.Type.PH && f.key.value === preference.toString());
    const selected = fIdx > -1 ? true : false;
    const prefBgStyle = `${styles.preferenceBlock} ${selected && styles.bgSelectedColor}`;
    const prefTxtStyle = selected ? styles.txtSelectedColor : styles.txtDefaultColor
    const prefIconStyle = selected ? styles.fillSelectedColor : styles.fillDefaultColor
    return (
      <Box key={idx}
        component="span"
        className={prefBgStyle}
        onClick={() => onClicked(preference)}>
        <span className={prefTxtStyle}>{preference}</span>
        <span className={styles.pl3}>
          <PreferenceIcon className={prefIconStyle} />
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
      <Grid item className={styles.title}>User preference</Grid>
      <Grid item className={styles.pt10}>
        <Stack direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          className={styles.content}>
          {preferenceBlock}
        </Stack>
      </Grid>
    </Grid>
  )
};

export default PreferenceFilter;