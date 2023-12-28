import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'
import React from 'react'
import style from './ContentHomePage.module.css'
import HomepageTop from './media/1.png'

const ContentHomePage = () => {
  return (
    <div>
      <Stack width={'100%'} direction={'column'} gap={0}>
        <Box
          // position={"relative"}
          className={style.firstBox}
          display={{ base: 'inline', lg: 'flex' }}
          paddingLeft={{ base: '15%', lg: '5%', xl: '8%' }}
          paddingTop={{ base: '80px', lg: '40px' }}
          paddingRight={{ base: '15%', lg: '5%', xl: '8%' }}
          textAlign={{ base: 'center', lg: 'left' }}
          justifyContent={'space-between'}
          borderRadius="0% 100% 0% 100% / 98% 10% 90% 8%   "

          // border={"1px solid red"}
        >
          <Box
            className={style.firstFBox}
            class={style.secondBox}
            width={{ base: '100%', lg: '80%' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text
              as={'h1'}
              fontSize={{ base: '30px', md: '40px', lg: '55px' }}
              fontWeight={'bold'}
              marginBottom={{ base: '10px', lg: '20px' }}
              textAlign={'left'}
          
            >
              <Text className={style.auction_hero_heading}>
                Remove barriers, <br /> find clarity, <br /> exceed goals.
              </Text>
            </Text>
            <Text
              fontSize={{ base: '14px', md: '16px', lg: '20px' }}
              marginBottom={'20px'}
              fontWeight={'normal'}
              fontFamily="Haffer"
            >
              Anything is possible with the most powerful work management
              software at your fingertips.
            </Text>
            {/* <Box
              display={{base:"inline",lg:"flex"}}
              width={{base:"100%"}}
              justifyContent={"space-around"}
              // border={"1px solid red"}
            > */}
            {/* <Input
                placeholder="Enter Your Business Email"
                bg={"white"}
                color={"black"}
                _placeholder={{color:"black"}}
                width={{base:"100%",lg:"60%"}}
                height={{ base: "60px", lg: "50px" }}

              /> */}
            <Button
              height={{ base: '60px', lg: '50px' }}
              bg={'rgb(34 197 94)'}
              _hover={{ bg: 'rgba(34,197,94,0.8)' }}
              width={{ base: '100%', lg: '30%' }}
              class="custom-btn main-button get-started-button"
            >
              Get Started
            </Button>
            {/* </Box> */}
          </Box>
          <Box width={{ base: '100%', lg: '100%' }} height={'124%'}>
            <Image
              width={'100%'}
              // position={"absolute"}
              // right={{ base: "10%", lg: "0" }}
              // left={{ base: "10%", lg: "50%" }}
              height={'80%'}
              paddingTop={'30px'}
              src={HomepageTop}
              className={style.auction_hero_image}
            />
          </Box>
        </Box>
      </Stack>
    </div>
  )
}

export default ContentHomePage
