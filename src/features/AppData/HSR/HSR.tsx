import { Grid } from '@mui/material';
import React from 'react';
import HSRData from './HSRData/HSRData';
import styles from './HSR.module.scss';
import HSRHeader from './HSRHeader/HSRHeader';

interface HSRProps { }

const HSR: React.VFC<HSRProps> = () => (
  <Grid container direction="column" className={styles.HSR}>
    <Grid item style={{ width: "100%", padding: "10px" }}>
      <HSRHeader />
    </Grid>
    <Grid item style={{ width: "100%" }}>
      <HSRData />
    </Grid>
  </Grid>
);

export default HSR;
