import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar } from "react-circular-progressbar";

const Skills = () => {
    const skills = [
      { title: "C++", percentage: 50 },
      { title: "Python", percentage: 40 },
      { title: "Java", percentage: 83 },
      { title: "ReactJs", percentage: 85 },
      { title: "NodeJs", percentage: 75 },
      { title: "MongoDb", percentage: 43 },
      { title: "ExpressJs", percentage: 50 },
    ];
  
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      initialSlide: 0,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <Container id="skills">
        <Typography variant="h3" sx={{ color: "#fff" }}>
          Skills
        </Typography>
        <Box sx={{ color: "white" }}>
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index}>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={{
                    root: {
                      width: "100px", // Adjust the size of the progress bar here
                      height: "100px", // Adjust the size of the progress bar here

                      xs: {
                        width: "50px",
                        height: "50px"
                      }
                    },
                    path: {
                      stroke: `rgba(62, 152, 199, ${skill.percentage / 100})`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    trail: {
                      stroke: "#d6d6d6",
                      strokeLinecap: "butt",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#f88",
                      fontSize: "20px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                <Typography variant="h6" sx={{ color: "#fff", marginTop: "10px" }}>
                  {skill.title}
                </Typography>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
)};

export default Skills;
