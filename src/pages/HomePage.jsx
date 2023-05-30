import { Box, Text, Flex, Button, Card } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/homepage.module.css";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <Box display={"flex"} flexDir={"column"}>
      {/* for home section */}
      <Box id="Home" className={styles.home}>
        <Box>
          <Box w={"60%"} textAlign={"start"}>
            <Text fontSize={{ base: "20px", md: "30px" }} fontWeight={700}>
              Content fleet management Content fleet
            </Text>
            <Text
              className={styles.plainTxt}
              fontSize={{ base: "16px", md: "18px" }}
            >
              TransportSimple has been built with a vision to revolutionise the
              logistics industry globally. It is the perfect one-stop fleet
              managemnt solution suitable for all fleet sizes.
            </Text>
            <Flex className={styles.btn}>
              <Button>Get Started</Button>
              <Button>Contact us</Button>
            </Flex>
          </Box>
        </Box>
        <Box>
          <img
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1685439653/p3_enxtz0.png"
            width={"100%"}
            height={"100%"}
            alt="png1"
          />
        </Box>
      </Box>

      {/* for feature section */}
      <Box id="Feature" className={styles.feature}>
        <Box>
          <Box w={"55%"} textAlign={"start"}>
            <Box borderLeft={"6px solid #518BFA"} pl={2}>
              <Text fontWeight={600}>
                KNOW ABOUT <span>TRANSPORTSIMPLE</span>
              </Text>
              <Text className={styles.boldTxt}>
                At your company, we specialize in providing comprehensive
              </Text>
            </Box>

            <Text
              className={styles.plainTxt}
              fontSize={{ base: "16px", md: "18px" }}
            >
              TransportSimple has been built with a vision to revolutionise the
              logistics industry globally. It is the perfect one-stop fleet
              managemnt solution suitable for all fleet sizes. TransportSimple
              has been built with a vision to revolutionise the logistics
              industry globally. It is the perfect one-stop fleet managemnt
              solution suitable for all fleet sizes.
            </Text>
          </Box>
        </Box>
        <Flex align={"center"} justify={"center"}>
          <img
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1685439199/p2_csrm7z.png"
            width={"90%"}
            alt="logo"
          />
        </Flex>
      </Box>

      {/* for industry section */}

      <Box id="Industry" className={styles.industry}>
        <Flex justify={'center'}>
          <Box
            w={"25%"}
            textAlign={"center"}
            borderBottom={"6px solid #518BFA"}
            p={5}
          >
            <Text className={styles.boldTxt}>
              There are three steps to get worlds most visible platform
            </Text>
          </Box>
        </Flex>
        <Box className={styles.cardContainer}>
           <Cards n={'01'} />
           <Cards n={'02'}/>
           <Cards n={'03'} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
