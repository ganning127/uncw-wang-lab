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
import { Box, Text, Heading, Img, Center, SimpleGrid } from "@chakra-ui/react";
export const SwiperLanding = ({}) => {
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
          <Center
            bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/landing1.png') "
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h="600px"
            w="100vw"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
              <Img src="/wang_long_logo.png" maxH="500px" mx="auto" />
              <Box textAlign="center" d={{ base: "none", md: "block" }}>
                <Heading as="h1" size="4xl" color="#5BBEE5" fontWeight={700}>
                  The Wang Lab
                </Heading>
                <Text fontSize="6xl" color="white">
                  Research Revivified
                </Text>
              </Box>
            </SimpleGrid>
          </Center>
        </SwiperSlide>

        <SwiperSlide>
          <Center
            bgImage="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/landing2.jpeg') "
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            h="600px"
            w="100vw"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center">
              <Box>
                <Img src="/wang_long_logo.png" maxH="500px" mx="auto" />
              </Box>

              <Box textAlign="center" d={{ base: "none", md: "block" }}>
                <Heading as="h1" size="4xl" color="#5BBEE5" fontWeight={700}>
                  The Wang Lab
                </Heading>
                <Text fontSize="6xl" color="white">
                  Research Revivified
                </Text>
              </Box>
            </SimpleGrid>
          </Center>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
