import { Card, CardContent, CardHeader, CardMedia, Grid, Paper, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import Hotel from '../../../../../../types/hotel';
import hotelCard from '../../../../../../assets/hotelCard.png';

const HotelCard: React.VFC<Hotel.HotelCardProps> = (props) => {
  const isSuccess = props.status === "success";
  const cardMedia = isSuccess
    ? <CardMedia component='img' sx={{ width: 200 }} image={props.image.url} alt={props.image.alt} />
    : <Skeleton variant='rectangular' height={100} width={200} animation="wave" />
  const cardHeader = isSuccess
    ? <CardHeader title={`${props.no}.${props.title}`} subheader={props.subTitle} />
    : <CardHeader title={<Skeleton variant='text' animation="wave" height={30} width={250} style={{ marginLeft: '15px' }} />} subheader={
      <Skeleton variant='text' animation="wave" height={30} width={310} style={{ marginLeft: '15px' }} />
    } />
  const cardContent = isSuccess
    ? <CardContent>  {props.content}</CardContent>
    : <CardContent><Skeleton variant='text' height={30} width={280} animation="wave" /></CardContent>
  return (
    <Grid item>
      <Paper> 
         <Card sx={{ display: 'flex', backgroundColor: '#f3e5f5', color: 'warning.dark' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {cardMedia}
            {cardHeader}
            {cardContent}
          </Box>
        </Card>
        {/* <img src={hotelCard} width="625px" /> */}
      </Paper>
    </Grid>
  )
};

export default HotelCard;
