import React from 'react';
import styles from './SideBar.module.scss';
import { Grid } from '@mui/material';
import Map from './Map/Map';
import Filter from './Filter/Filter';
import Legend from './Legend/Legend';

interface SideBarProps { }

const SideBar: React.VFC<SideBarProps> = () => (
  <Grid className={styles.SideBar}
    container direction="column" justifyContent="flex-start"
    alignItems="flex-start">
    <Grid item style={{ width: "97%", padding: "3px 0px" }}>
      <Map />
    </Grid>
    <Grid item style={{ width: "97%", padding: "3px 0px" }}>
      <Filter />
    </Grid>
    <Grid item style={{ width: "97%", padding: "3px 0px" }}>
      <Legend />
    </Grid>
  </Grid>
);

export default SideBar;
