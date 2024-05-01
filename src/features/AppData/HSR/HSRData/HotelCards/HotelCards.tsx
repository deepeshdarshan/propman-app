import { Grid } from "@mui/material";
import Hotel from "../../../../../types/hotel";
import HotelCard from "./HotelCard/HotelCard";
import styles from "./HotelCards.module.scss";

const HotelCards: React.VFC<Hotel.HotelCardsProps> = (options) => (
  <Grid container spacing={1} direction="column" className={styles.HotelCards} style={{ paddingBottom: "10px" }}>
    {options.hotels.map((item, i) => {
      const image = {
        url: item.image.url,
        alt: item.image.alt,
      };
      return (
        <HotelCard
          key={i}
          no={i + 1}
          image={image}
          title={item.title}
          subTitle={item.subTitle}
          content={item.content}
          status={options.status}
        />
      );
    })}
  </Grid>
);

export default HotelCards;
