import { Box, Grid, Stack } from "@mui/material";
import React, { FC } from "react";
import styles from "./Footer.module.scss";

interface FooterProps { }

const Footer: FC<FooterProps> = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={5}
    className={styles.Footer}>
    <Box component="div" className={styles.Content}>
      <Box component="span">&copy;2022&nbsp;</Box>
      <Box component="span">-&nbsp;</Box>
      <Box component="span">Traveldoo Technologies.&nbsp;</Box>
      <Box component="span">All rights reserved.&nbsp;</Box>
      <Box
        component="a"
        className={styles.Privacy}
        href="https://integ.traveldoo.com/ReservationSite/DataPrivacy.jsp">
        Data Privacy
      </Box>
    </Box>
  </Stack>
);

export default Footer;
