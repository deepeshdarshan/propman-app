import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React from 'react';
import styles from './SearchBar.module.scss';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface SearchBarProps { }

const SearchBar: React.VFC<SearchBarProps> = () => {

  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" className={styles.SearchBar}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
        <Box component="span">
          <Autocomplete
            className={styles.TextField1}
            options={["PARIS", "MANCHESTER", "WASHINGTON", "MUMBAI", "KOCHI"]}
            renderInput={(params) => <TextField {...params} className={styles.TextField} />} />
        </Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Box component="span">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box component="span">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Stack>
      </Stack>
      <Box component="span">
        <Button variant="contained" className={styles.Title}>Search</Button>
      </Box>
    </Stack>
  )
};

export default SearchBar;
