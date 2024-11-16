import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Link, LinkBox } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
  {
    title: "Work Space",
    src: "https://work-space-portfolio-site.vercel.app/",
    description:
      "Work Space is a job search responsive website with implemented job filtering and new vacancy creation. This website uses the server to get vacancies and location data and to add new vacancies.",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "Interno Design",
    src: "https://interior-design-portfolio-site.vercel.app/",
    description:
      "Interior Design is a responsive website on Vue.js for viewing articles on design and construction of houses with the implementation of filtering articles by tags.",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Auto Service",
    src: "https://auto-service-portfolio-site.vercel.app/",
    description:
      "Auto Service is a responsive website for a car repair shop, mainly focused on layout.",
    getImageSrc: () => require("../images/photo3.png"),
  },
  {
    title: "Portfolio web-site (this site)",
    src: "https://portfolio-site-seven-dun.vercel.app/",
    description:
      "Portfolio website is a responsive website on React JS containing some information about me and my projects with links.",
    getImageSrc: () => require("../images/photo4.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={5}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
         display={{ base: "flex", md: "grid" }}
         flexDirection={{ base: "column", md: "initial" }}
         gridTemplateColumns={{ base: "none", md: "repeat(2, minmax(0, 1fr))" }}
         gap={8} 
         
      >
        {projects.map((project) => (

          <Link href={project.src}>
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          </Link>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
