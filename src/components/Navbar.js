import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/navbar.module.css";
import { Link as ScrollLink } from "react-scroll";

const Links = ["Home", "Feature", "Industry", "About", "Contact us"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
      position={'fixed'}
      zIndex={1}
      width={'100%'}
        fontFamily={"Rubik, 'sans-serif'"}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box className={styles.logo}></Box>
          </HStack>
          <HStack as={"nav"} spacing={14} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                exact="true"
                activeClass={styles.active}
              >
                {link}
              </ScrollLink>
            ))}
          </HStack>
          <Box>
            <Button
              height={"40px"}
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight={200}
              background={"#0537AC"}
              color={"white"}
            >
              Get Demo
            </Button>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                exact="true"
                activeClass={styles.active}
              >
                {link}
              </ScrollLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
