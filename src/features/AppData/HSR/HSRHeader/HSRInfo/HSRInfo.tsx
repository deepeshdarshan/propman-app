import { Box, Grid, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import React, { FC } from 'react';
import styles from './HSRInfo.module.scss';

interface HSRInfoProps { }

const HSRInfo: React.VFC<HSRInfoProps> = () => (
  <Grid container direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={1}
    className={styles.content}>
    <Grid item className={styles.pt2}>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={0.5}>
        <Box component="span" className={styles.Bold}>1</Box>
        <Box component="span">of</Box>
        <Box component="span" className={styles.Bold}>313 Hotels</Box>
      </Stack>
    </Grid>
    <Grid item>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
        <Box>Sorted by</Box>
        <Box>
          <Select autoWidth label="Age" variant='outlined' value="PO" className={`${styles.ht30} ${styles.Bold}`}>
            <MenuItem className={styles.Bold} value="PO">Policy</MenuItem>
            <MenuItem className={styles.Bold} value="D">Distance</MenuItem>
            <MenuItem className={styles.Bold} value="PR">Price</MenuItem>
          </Select>
        </Box>
      </Stack>
    </Grid>
  </Grid>
);

export default HSRInfo;
