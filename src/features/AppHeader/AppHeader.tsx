import React, { FC } from 'react';
import styles from './AppHeader.module.scss';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => (
  <div className={styles.AppHeader}>
    AppHeader Component
  </div>
);

export default AppHeader;
