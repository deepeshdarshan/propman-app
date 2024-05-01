import { Grid } from '@mui/material';
import React, { FC } from 'react';
import styles from './Map.module.scss';

interface MapProps { }

const Map: React.VFC<MapProps> = () => (
  <Grid container direction="column" justifyContent="center" alignItems="center" className={styles.Map}>
    <Grid item className={styles.hg85pc}>
      Map
    </Grid>
    <Grid item className={`${styles.hg15pc} ${styles.content} ${styles.info}`}>
      View in a map
    </Grid>
  </Grid>
);

export default Map;
