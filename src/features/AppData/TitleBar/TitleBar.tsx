import { Grid } from '@mui/material';
import React from 'react';
import styles from './TitleBar.module.scss';

interface TitleBarProps { }

const TitleBar: React.VFC<TitleBarProps> = () => (
  <Grid container direction="column" justifyContent="center" alignItems="flex-start" className={styles.TitleBar}>
    <Grid item className={styles.Title}>
      Available Hotels and Rooms
    </Grid>
  </Grid>
);

export default TitleBar;
