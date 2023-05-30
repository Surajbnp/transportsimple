import React from "react";
import styles from '../styles/cards.module.css'
import { Box } from "@chakra-ui/react";

const Cards = ({n}) => {
  return (
    <Box className={styles.cont}>
     <Box className={styles.round}>{n}</Box>
    </Box>
  )
};

export default Cards;
