import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Anastasiia Demidova!";
const bio1 = "Frontend/Web developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={5}>
      <Avatar src="https://64.media.tumblr.com/928cb1fc73a0074c52f14500df117dc0/tumblr_pxdfk8D7Nu1qcac69o1_1280.jpg"
      size="2xl"
      name='Anastasiia Demidova'
      />

      <Heading as='h4' size={{ base: "sm", md: "lg", lg: "lg" }} sx={{
            "@media screen and (max-width: 1028px)": {
              size: 15,
            },
          }}  noOfLines={1}>{greeting}</Heading>

      <VStack spacing={6}>
        <Heading as='h1' size={{ base: "lg", md: "3xl", lg: "3xl" }} sx={{
            "@media screen and (max-width: 1028px)": {
              size: 30,
            },
          }} 
          noOfLines={1}>{bio1}</Heading>
        
      </VStack>

      
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
