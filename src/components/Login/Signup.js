import React, { useState, useRef } from "react";
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
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://auctionapi.shop/sam/doc/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (res.ok) {
          // alert("Signup successful");
          toast.success("Signup successful");
          setUserData({
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            email_id: "",
            mobile_number: "",
            PAN: "",
          });
          navigate("/login");
        } else {
          return res.json().then((data) => {
            toast.error(data.message); // display the error message to the user
          });
        }
      })
      .catch((err) => {
        console.error(err);
        // alert("Signup failed");
        toast.error("Signup failed");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Box>
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
        bg={"#1b4965"}
        className="login-signup-flex"
      >
        <Stack
          spacing={4}
          w={"50%"}
          maxW={"xl"}
          bg={useColorModeValue("#1b4965", "gray.700")}
          rounded={"xl"}
          p={6}
          my={12}
          borderRadius="none"
          className="Stack-box"
        >
          <div className="login-box">
            {/* <Heading
              lineHeight={3.0}
              fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
              textAlign="center"
              color="#fbcb04"
              textTransform="uppercase"
              className="signup-head title-gold"
            >
              Signup
            </Heading> */}
            <div class="flex flex-row justify-between ">
              <Heading
                as="h1"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                textAlign="center"
                fontWeight="bold"
                className="heading"
              >
                Creat an account
              </Heading>
              {/* <h1 className="login-heading ">Sign Up?</h1> */}
              <Link to="/login" className="signup-link">
                <Text
                  as="u"
                  // color={"black"}
                  className="hover:text-[#fbcb04] heading "
                >
                  Log In?
                </Text>
              </Link>
            </div>
            <form id="f" onSubmit={handleSubmit} class="login-page-form">
              <FormControl id="firstName" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small "> First Name</span>
                </FormLabel>
                <Input
                  placeholder="Enter First Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small ">Last Name</span>
                </FormLabel>
                <Input
                  placeholder="Enter Last Name"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small ">Username</span>
                </FormLabel>
                <Input
                  className="signup-input"
                  placeholder="Enter Username"
                  backgroundColor={"white"}
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="username"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                />
              </FormControl>
              <FormControl id="email_id" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small ">Email Id</span>
                </FormLabel>
                <Input
                  placeholder="Enter email"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                  name="email_id"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              <FormControl id="mobile_number" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small ">Mobile Number</span>
                </FormLabel>
                <Input
                  placeholder="Enter Mobile Number"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="mobile_number"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              <FormControl id="PAN" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small ">PAN Number</span>
                </FormLabel>
                <Input
                  placeholder="Enter PAN Number"
                  _placeholder={{ color: "gray.500" }}
                  type="text"
                  name="PAN"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small  ">Password</span>
                </FormLabel>
                <Input
                  placeholder="Enter password"
                  _placeholder={{ color: "gray.500" }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl>
              {/* <FormControl id="password" isRequired>
                <FormLabel class="heading-small">
                  <span class="heading-small">Confirm Password</span>
                </FormLabel>
                <Input
                  placeholder="Enter the same password"
                  _placeholder={{ color: "gray.500" }}
                  type="password"
                  name="password"
                  onChange={handleChange}
                  isRequired
                  borderRadius="6px"
                  className="signup-input"
                />
              </FormControl> */}
              {/* <button
                type="submit"
                value="Submit"
                className="custom-btn main-button w-full mt-[30px]"
                onClick={handleSubmit}
              >
                Submit
              </button> */}
              <button
                type="submit"
                value="Sign up"
                fontSize={"18px"}
                fontWeight="600"
                bg={"#fbcb04"}
                color={"white"}
                borderRadius="10px"
                border={"1px solid #AAB7C2"}
                mt={6}
                className="!w-full custom-btn main-button mt-6"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {loading ? (
                  <ThreeDots
                    color="#000000"
                    height={40}
                    width={40}
                    timeout={1000000}
                  />
                ) : (
                  "Sign Up"
                )}
              </button>
              {/* <p class="paragraph text-center">
                Already have an account?{" "}
                <Link to="/Login" class="login-link">
                  Login
                </Link>
              </p> */}
            </form>
          </div>
        </Stack>
      </Flex>
    </Box>
  );
}
