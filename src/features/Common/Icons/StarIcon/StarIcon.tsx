import { Box } from '@mui/system';
import React, { FC } from 'react';
import styles from './StarIcon.module.scss';

interface StarIconProps { }

const StarIcon: FC<StarIconProps> = () => (
  <Box component="span" className={styles.StarIcon}>
    <svg width="12" height="11" viewBox="0 0 12 11" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.90276L3.40962 10.336C3.03831 10.5415 2.59601 10.2201 2.67666 9.8035L3.23931 6.897L1.07572 4.87631C0.765592 4.58666 0.934535 4.06671 1.35569 4.01467L4.2938 3.65162L5.54701 0.969492C5.72664 0.585036 6.27336 0.585037 6.45299 0.969493L7.7062 3.65162L10.6443 4.01467C11.0655 4.06671 11.2344 4.58666 10.9243 4.87631L8.76069 6.897L9.32334 9.8035C9.40399 10.2201 8.96169 10.5415 8.59038 10.336L6 8.90276Z" />
    </svg>

  </Box>
);

export default StarIcon;
