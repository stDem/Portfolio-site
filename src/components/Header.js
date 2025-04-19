import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:stxdem@gmail.com",
    title: 'my email',
  },
  {
    icon: faGithub,
    url: "https://github.com/stDem?tab=repositories",
    title: 'my gitHub repositories',
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/anastasiia-demidova-0aa44a329/",
    title: 'my Linkedin',
  },
  {
    icon: faWhatsapp,
    url: "https://api.whatsapp.com/send?phone=491628645712",
    title: 'write me in WhatsApp',
  },
  {
    icon: faGoogleDrive,
    url: "https://drive.google.com/drive/u/2/folders/1VPCcvftPZAneZu0BB-xQq0Upe2h9qmER",
    title: 'google drive with my diplomas/certificates',
  },
];

const Header = () => {
  const headerRef = useRef(null); 
 
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 
  
  const handleClick = (anchor) => () => { 
    const id = `${anchor}-section`; 
    const element = document.getElementById(id); 
    if (element) { 
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
      }); 
    } 
  }; 

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef} 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          sx={{
            "@media screen and (max-width: 600px)": {
              px:7,
            },
          }}
          alignItems="center"
        >
          <nav>
            <HStack spacing={{ base: "4", md: "8", lg: "8" }}>
              {
                socials.map((social)=>
                  <Link href={social.url} key={social.url} alt={social.title} title={social.title} isExternal>
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </Link>
                )
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: "3", md: "8", lg: "8" }} sx={{
              "@media screen and (max-width: 430px)": {
                display: "none",
              },
            }}
            >
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
