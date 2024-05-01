import { Grid, Stack, Box, Divider } from '@mui/material';
import React from 'react';
import styles from './Legend.module.scss';
import { ReactComponent as Rectangle } from '../../../../assets/round_rect.svg';
import { ReactComponent as RateChange } from '../../../../assets/alert.svg';
import { ReactComponent as OOPolicy } from '../../../../assets/oo_policy.svg';
import { ReactComponent as InPolicy } from '../../../../assets/in_policy.svg';
import { ReactComponent as Night } from '../../../../assets/moon.svg';
import { ReactComponent as Preference } from '../../../../assets/heart.svg';
import { ReactComponent as Rating } from '../../../../assets/star.svg';
import { ReactComponent as Location } from '../../../../assets/pin.svg';
import { ReactComponent as Safe } from '../../../../assets/safe.svg';
import { ReactComponent as CreditCard } from '../../../../assets/card.svg';
import { ReactComponent as Ribbon } from '../../../../assets/ribbon.svg';

const Legend: React.VFC = () => (
  <Grid container direction="column" justifyContent="center" alignItems="flex-start" className={styles.Legend}>
    <Grid item>
      <Ribbon className={styles.Ribbon} />
    </Grid>
    <Grid item>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Rectangle className={styles.public} /></Box>
        <Box component="span" className={`${styles.content} ${styles.mt5}`}>Public rate</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Rectangle className={styles.ooPolicy} /></Box>
        <Box component="span" className={`${styles.content} ${styles.mt5}`}>Out of policy</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Rectangle className={styles.negotiated} /></Box>
        <Box component="span" className={`${styles.content} ${styles.mt5}`}>Negotiated rate</Box>
      </Stack>
      <Stack direction="row" className={styles.Divider}>
        <Divider />
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><RateChange /></Box>
        <Box component="span" className={styles.content}>Rate change during policy</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><OOPolicy /></Box>
        <Box component="span" className={styles.content}>Out-of-policy</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><InPolicy /></Box>
        <Box component="span" className={styles.content}>In-policy</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Night /></Box>
        <Box component="span" className={styles.content}>Number of nights</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Preference className={styles.defaultColor} /></Box>
        <Box component="span" className={styles.content}>Prefered hotel</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Rating className={styles.defaultColor} /></Box>
        <Box component="span" className={styles.content}>Star rating</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Location /></Box>
        <Box component="span" className={styles.content}>Location</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><Safe /></Box>
        <Box component="span" className={styles.content}>Clean &amp; Safe hotels</Box>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center" className={styles.stack}>
        <Box component="span" className={styles.icon}><CreditCard /></Box>
        <Box component="span" className={styles.content}>Credit card CVC required</Box>
      </Stack>
    </Grid>
  </Grid >
);

export default Legend;
