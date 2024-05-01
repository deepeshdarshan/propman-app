import { Grid } from '@mui/material';
import React from 'react';
import FilterChips from './FilterChips/FilterChips';
import styles from './HSRHeader.module.scss';
import HSRInfo from './HSRInfo/HSRInfo';

interface HSRHeaderProps { }

const HSRHeader: React.VFC<HSRHeaderProps> = () => (
  <Grid container direction="column" spacing={1} className={styles.content}>
    <Grid item>
      <HSRInfo />
    </Grid>
    <Grid item>
      <FilterChips />
    </Grid>
  </Grid>
);

export default HSRHeader;
