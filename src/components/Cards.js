import React from "react";
import styles from "../styles/cards.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import {FaHandsHelping} from 'react-icons/fa'

const Cards = ({ n, heading }) => {
  return (
    <Box className={styles.cont}>
      <Box className={styles.round}>{n}</Box>
      <Text className={styles.head}>{heading}</Text>
      <Box mt={5} p={5}>
        <Text letterSpacing={'2px'}>
          We have 20+ years of industry experiance and understand the challange
          faced by you. Let us manage technologywhile you expand your bussiness.
        </Text>
      </Box>

      <Flex className={styles.icon}>
        <Box><FaHandsHelping size={'30px'} /></Box>
      </Flex>
    </Box>
  );
};

export default Cards;
