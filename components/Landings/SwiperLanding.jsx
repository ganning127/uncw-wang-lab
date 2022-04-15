import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Box, Text, Heading, Img, Button, SimpleGrid } from "@chakra-ui/react";
import { React, useRef } from "react";
export const SwiperLanding = ({}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Scrollbar, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Box
            bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/landing1.png') "
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h="600px"
            w="100vw"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
              <Img src="/wang_long_logo.png" maxH="90%" mx="auto" />
              <Box textAlign="center" d={{ base: "none", md: "block" }}>
                <Heading as="h1" size="4xl" color="#5BBEE5" fontWeight={700}>
                  The Wang Lab
                </Heading>
                <Text fontSize="6xl" color="white">
                  Research Revivified
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/landing2.jpeg') "
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h="60vh"
            w="100vw"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
              <Img src="/wang_long_logo.png" maxH="90%" mx="auto" />
              <Box textAlign="center" d={{ base: "none", md: "block" }}>
                <Heading as="h1" size="4xl" color="#5BBEE5" fontWeight={700}>
                  The Wang Lab
                </Heading>
                <Text fontSize="6xl" color="white">
                  Research Revivified
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
