import React, { FC } from 'react';
import styles from './MenuBar.module.scss';

interface MenuBarProps {}

const MenuBar: FC<MenuBarProps> = () => (
  <div className={styles.MenuBar}>
    MenuBar Component
  </div>
);

export default MenuBar;
