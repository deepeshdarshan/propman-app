import { Divider, Grid } from "@mui/material";
import React from "react";
import DistanceFilter from "./DistanceFilter/DistanceFilter";
import styles from "./Filter.module.scss";
import General from "./GeneralFilter/GeneralFilter";
import Name from "./NameFilter/NameFilter";
import Preference from "./PreferenceFilter/PreferenceFilter";
import Price from "./PriceFilter/PriceFilter";
import Rating from "./RatingFilter/RatingFilter";
import Type from "./TypeFilter/TypeFilter";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { add, filters, remove } from "./FilterSlice";
import FilterTypes from "./Filter.types";


const Filter: React.FC = () => {

  const hotelNames = [
    "Le Meridien",
    "Grand Hyatt",
    "Crowne Plaza",
    "Taj Gateway",
    "Mariott",
    "Holiday Inn"
  ];

  const dispatch = useAppDispatch();

  const selectedFilters = useAppSelector(filters);

  const filterSelectHandler = (filter: FilterTypes.Filter) => {
    dispatch(add({ type: filter.type, key: filter.key }));
  };

  const filterDeselectHandler = (filter: FilterTypes.Filter) => {
    dispatch(remove({ type: filter.type, key: filter.key }));
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className={styles.Filter}>
      <Grid item className={styles.pb10} style={{ width: "100%" }}>
        <Name hotelNames={hotelNames}
          filters={selectedFilters}
          onSelected={filterSelectHandler}
          onDeselected={filterDeselectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "5px 0px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <Type filters={selectedFilters}
          onSelected={filterSelectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "5px 0px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <General filters={selectedFilters}
          onSelected={filterSelectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "5px 0px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <Price filters={selectedFilters}
          min={2500} max={10000}
          onSelected={filterSelectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "5px 0px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <Rating filters={selectedFilters}
          min={1} max={5}
          onSelected={filterSelectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "10px 0px 5px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <DistanceFilter filters={selectedFilters}
          min={1} max={25} step={6}
          onSelected={filterSelectHandler}
          onDeselected={filterDeselectHandler} />
      </Grid>
      <Grid item style={{ width: "97%", padding: "5px 0px" }}>
        <Divider />
      </Grid>
      <Grid item>
        <Preference filters={selectedFilters}
          min={1} max={3}
          onSelected={filterSelectHandler} />
      </Grid>
    </Grid>
  );
};

export default Filter;
