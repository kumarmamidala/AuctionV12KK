import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { AuthContext } from "../../Context/AuthContextProvider";
import "./Login.css";

const initData = {
  username: "",
  password: "",
};

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initData);
  const { loginme, isAuth, error, getData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    loginme(data);
    document.getElementById("f").reset();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData")) || [];
    getData(user);
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate("/Profile");
    }
  }, [isAuth]);

  return (
    <Box>
      <Flex
        // minH={"60vh"}
        // paddingTop={"50px"}
        minW={"80%"}
        align={"center"}
        justify={"center"}
        bg={"#cae9ff"}
        className="login-signup-flex"
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"xl"}
          bg={useColorModeValue("#cae9ff", "gray.700")}
          rounded={"xl"}
          p={6}
          my={12}
          borderRadius="none"
          className="login-stack-box"
        >
          <div className="login-box">
            <div class="flex flex-row justify-between login-title">
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                textAlign="center"
                fontWeight="bold"
                className="heading  "
              >
                Login to your account
              </Heading>
              {/* <h1 className="login-heading ">Sign Up?</h1> */}
              <Link to="/signup" className="signup-link">
                <Text
                  as="u"
                  // color={"black"}
                  className="hover:text-[#fbcb04] heading"
                >
                  Sign up?
                </Text>
              </Link>
            </div>
            <form onSubmit={handleSubmit} id="f" class="login-page-form">
              <FormControl id="username" isRequired>
                <FormLabel>
                  <span className="label-text heading-small ">Username</span>
                </FormLabel>
                <Input
                  placeholder="Enter your username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  borderRadius="6px"
                  border={"1px solid #AAB7C2"}
                  marginTop="10px"
                  className="paragraph signup-input"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>
                  <span className="label-text heading-small ">Password</span>
                </FormLabel>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  borderRadius="6px"
                  border={"1px solid #AAB7C2"}
                  marginTop="10px"
                  className="paragraph signup-input"
                />
              </FormControl>
              <Stack spacing={6}>
                <button
                  type="submit"
                  value="Log in"
                  fontSize={"18px"}
                  fontWeight="600"
                  bg={"#fbcb04"}
                  color={"white"}
                  borderRadius="10px"
                  border={"1px solid #AAB7C2"}
                  marginTop={"30px"}
                  mt={6}
                  className="!w-full custom-btn main-button"
                  disabled={isLoading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "30px",
                  }}
                >
                  {isLoading ? (
                    <ThreeDots
                      color="#000000"
                      height={40}
                      width={40}
                      timeout={1000000}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </Stack>
            </form>
            <Flex
              justifyContent="center"
              alignItems="center"
              className="paragraph text-center "
            >
              <Text as="u" className="forgot-password-link mt-4">
                Forgot Password?
              </Text>
            </Flex>
          </div>
        </Stack>
      </Flex>
    </Box>

    // --------------
  );
}
