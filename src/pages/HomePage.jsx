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
        <Flex justify={"center"}>
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
          <Cards n={"01"} heading={"We will your Tech partner"} />
          <Cards n={"02"} heading={"Request a Free Trail"} />
          <Cards n={"03"} heading={"24x7 Team Support"} />
        </Box>
      </Box>

      {/* about section */}
      <Box id="About" className={styles.about}>
        <Box>
          <Text className={styles.whiteTxt}>
            Be more efficient and profitable with TransportSimple
          </Text>
          <Box
            w={"50%"}
            m={"auto"}
            fontWeight={300}
            fontSize={"18px"}
            letterSpacing={"2px"}
            p={5}
            color={"white"}
          >
            We offer solution to streamline operations and accounts, resulting
            in enhanced productivity and increased profits, scaliblity and ease
            in daily operations. We have been building a solution to
            revolutionise the logistics industry globally.
          </Box>
          <Box>
            <Button
              background={"#FFC500"}
              color={"white"}
              fontSize={"14px"}
              letterSpacing={"2px"}
            >
              Book a Demo
            </Button>
          </Box>
        </Box>

        <Text
          mt={5}
          fontWeight={600}
          fontSize={"20px"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
        >
          Benifit of Working With <span>US</span>
        </Text>

        <Box className={styles.aboutPng}>
          <Flex>
            <img src="https://360degreecloud.com/wp-content/uploads/2021/11/banner-image.png" alt="png" />
            <Text>Industry Experts</Text>
          </Flex>
          <Flex>
            <img src="https://cdn-icons-png.flaticon.com/512/2961/2961321.png" alt="png" />
            <Text>Top Developers</Text>
          </Flex>
          <Flex>
            <img src="https://360degreecloud.com/wp-content/uploads/2021/11/banner-image.png" alt="png" />
            <Text>Industry Experts</Text>
          </Flex>
          <Flex>
            <img src="https://360degreecloud.com/wp-content/uploads/2021/11/banner-image.png" alt="png" />
            <Text>Industry Experts</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
