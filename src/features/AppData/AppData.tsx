import { Grid } from '@mui/material';
import React, { FC } from 'react';
import HSR from './HSR/HSR';
import SearchBar from './SearchBar/SearchBar';
import SideBar from './SideBar/SideBar';
import TitleBar from './TitleBar/TitleBar';
import styles from './AppData.module.scss';
import Footer from './Footer/Footer';

interface AppDataProps { }

const AppData: React.VFC<AppDataProps> = () => (
  <Grid container direction="column" justifyContent="flex-start" alignItems="center">
    <Grid item style={{ width: "942px", marginBottom: "5px" }}>
      <TitleBar />
    </Grid>
    <Grid item style={{ width: "942px", marginBottom: "2px" }}>
      <SearchBar />
    </Grid>
    <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ width: "942px" }}>
      <Grid item style={{ width: "25%" }}>
        <SideBar />
      </Grid>
      <Grid item style={{ width: "75%", marginTop: "4px" }}>
        <HSR />
      </Grid>
    </Grid>
    <Grid item style={{ width: "100%", marginBottom: "5px"}}>
      {/* <Footer /> */}
    </Grid>
  </Grid>
);

export default AppData;
