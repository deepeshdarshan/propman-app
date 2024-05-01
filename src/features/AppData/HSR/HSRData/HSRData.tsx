import { Container } from '@mui/material';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import styles from './HSRData.module.scss';
import { fetchHotels } from './HotelActions';
import HotelCards from './HotelCards/HotelCards';
import { hotels, status } from './HotelSlice';

const Hotel: React.FC = () => {
  const items = useAppSelector(hotels);
  const hotelStatus = useAppSelector(status);
  const dispatch = useAppDispatch();
 
  React.useEffect(() => {
    fetchHotelHandler();
  }, []);

  const fetchHotelHandler = () => {
    dispatch(fetchHotels());
  };
  return (
    <Container className={styles.HSRData}>
      {/* <Header/> */}
      <InfiniteScroll dataLength={items.length} next={fetchHotelHandler} hasMore={false} loader={null}>
        <HotelCards hotels={items} status={hotelStatus} />
      </InfiniteScroll>
    </Container>
  )
};

export default Hotel;
