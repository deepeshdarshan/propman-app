import Chip from '@mui/material/Chip';
import React from 'react';
import styles from './FilterChip.module.scss';
import { ReactComponent as Star } from '../../../../../assets/star.svg';
import FilterTypes from '../../../../SideBar/Filter/Filter.types';

interface FilterChipProps {
  readonly label: string | JSX.Element;
  readonly onDelete: (filter: FilterTypes.Filter) => void;
  readonly type: FilterTypes.FType
  readonly value: FilterTypes.KType;
}

const FilterChip: React.VFC<FilterChipProps> = (props) => {
  const filter: FilterTypes.Filter = { type: props.type, key: props.value };
  const label = <div className={styles.Label}>{props.label}</div>
  return (
    <Chip label={label}
      className={`${styles.content} ${styles.Chip}`}
      variant="outlined"
      color="primary"
      onDelete={() => props.onDelete(filter)} />
  )
};

export default FilterChip;
