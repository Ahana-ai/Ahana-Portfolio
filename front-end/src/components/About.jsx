import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container id="about">
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: "#ffffff",
          }}
        >
          About
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
          }}
        >
          I am Ahana De, a cyber security enthusiast currently in my 3rd year of
          B.Tech degree. With a passion for technology and a keen interest in
          cyber security, I am constantly learning and striving to enhance my
          skills. I am particularly drawn to web app development as a means to
          express my creativity and explore the intersection of cyber security
          and technology.
          <br />
          Starting with limited programming knowledge, I have overcome
          challenges and grown in confidence. Today, I am proficient in web app
          development and equipped with a solid understanding of various aspects
          of cyber security, such as network security, encryption algorithms,
          vulnerability assessment, and incident response. Through my portfolio
          website, I aim to showcase my journey, skills, and projects. It serves
          as a platform to connect with fellow technology enthusiasts, potential
          collaborators, and industry professionals. I am excited about the
          possibilities that lie ahead and look forward to being a part of the
          vibrant community of technology professionals.
          <br />
          Thank you for visiting my portfolio website. Feel free to explore my
          projects and experiences, and let's connect to discuss our shared
          interests and potential collaborations.
          <br />
          Best regards,
          <br />
          Ahana.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
