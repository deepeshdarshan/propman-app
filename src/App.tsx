import styles from './App.module.scss';
import Filter from './features/AppData/SideBar/Filter/Filter';
import Hotel from './features/AppData/HSR/HSRData/HSRData';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Legend from './features/AppData/SideBar/Legend/Legend';
import { Grid } from '@mui/material';
import React from 'react';
import Map from './features/AppData/SideBar/Map/Map';
import SideBar from './features/AppData/SideBar/SideBar';
import HSRHeader from './features/AppData/HSR/HSRHeader/HSRHeader';
import HSR from './features/AppData/HSR/HSR';
import TitleBar from './features/AppData/TitleBar/TitleBar';
import SearchBar from './features/AppData/SearchBar/SearchBar';
import AppData from './features/AppData/AppData';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#025abd',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppData />
    </ThemeProvider>
  );
}

export default App;
