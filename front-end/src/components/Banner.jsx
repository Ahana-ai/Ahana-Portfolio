import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import AhanaImg from "../assets/AhanaImg.jpg";
import { motion } from "framer-motion";

const IconWidth = "60px";
const IconHeight = "80px";

const TEXTS = [
  "3rd Year Student",
  "Full Stack Developer",
  "Problem Solver in Leetcode",
];

const Image = styled("img")({
  borderRadius: "50%",
  marginLeft: "100px",

  "@media (max-width: 1150px)": {
    height: "300px",
    marginLeft: "90px",
  },
  "@media (max-width: 450px)": {
    height: "200px",
  },
});

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 3 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const text = "AHANA DE";
  const words = text.split("");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        // damping: 12,
        // stiffness: 100,
        duration: 5,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "ease-in-out"
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Container id="home">
      <Box>
        <Grid
          container
          spacing={2}
          direction={{
            md: "row",
            sm: "colomn",
          }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            margin: "auto auto"
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              color: "white",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                fontStyle: "oblique",
                // marginLeft: {sm: "20px", md: "30%"},
                letterSpacing: "2px",
                wordSpacing: "4px"
              }}
            >
              <motion.div
                style={{
                  // overflow: "hidden",
                  // display: "flex",
                  // fontSize: "2rem",
                }}
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span
                    variants={child}
                    // style={{ marginRight: "5px" }}
                    key={index}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                // marginLeft: {sm: "20px", md: "30%"},
              }}
            >
              <TextTransition springConfig={presets.wobbly} inline={true}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </Typography>
            <Typography
              sx={{
                wordBreak: "break-word",
                // marginLeft: {sm: "20px", md: "30%"},
                marginRight: {sm: "20px", xs: "20px"}
              }}
            >
              Currently, I am pursuing my education at Hooghly Engineering and
              Technology College in Pipulpathi, Hooghly. As a dedicated and
              enthusiastic learner, I am deeply passionate about acquiring and
              refining my skills through practical projects.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              spacing={12}
              justifyContent="space-evenly"
              alignItems="center"
              mt={5}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* React Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  viewBox="0 0 40 40"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    position: "absolute",
                    top: "15%",
                  }}
                >
                  <motion.path
                    variants={pathVariants}
                    fill="#4e7ab5"
                    d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4e7ab5"
                    d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4e7ab5"
                    d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#8bb7f0"
                    d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4e7ab5"
                    d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#8bb7f0"
                    d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#8bb7f0"
                    d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"
                  ></motion.path>
                  <g>
                    <motion.path
                      variants={pathVariants}
                      fill="#8bb7f0"
                      d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"
                    ></motion.path>
                  </g>
                </motion.svg>
                {/* Python Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  preserveAspectRatio="xMinYMin meet"
                  viewBox="0 0 256 255"
                  id="python"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ position: "absolute", top: "40%" }}
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="12.959%"
                      x2="79.639%"
                      y1="12.039%"
                      y2="78.201%"
                    >
                      <stop offset="0%" stop-color="#387EB8"></stop>
                      <stop offset="100%" stop-color="#366994"></stop>
                    </linearGradient>
                    <linearGradient
                      id="b"
                      x1="19.128%"
                      x2="90.742%"
                      y1="20.579%"
                      y2="88.429%"
                    >
                      <stop offset="0%" stop-color="#FFE052"></stop>
                      <stop offset="100%" stop-color="#FFC331"></stop>
                    </linearGradient>
                  </defs>
                  <motion.path
                    fill="url(#a)"
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                    variants={pathVariants}
                  ></motion.path>
                  <motion.path
                    fill="url(#b)"
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                    variants={pathVariants}
                  ></motion.path>
                </motion.svg>
                {/* NodeJs Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  viewBox="0 0 48 48"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ position: "absolute", top: "70%" }}
                >
                  <motion.path
                    variants={pathVariants}
                    fill="#21a366"
                    d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#21a366"
                    d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                  ></motion.path>
                </motion.svg>
                <Image src={AhanaImg} alt="Ahana De" />
                {/* MongoDb Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  id="mongodb"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ position: "absolute", top: "70%" }}
                >
                  <motion.path
                    variants={pathVariants}
                    fill="#439934"
                    fill-rule="evenodd"
                    d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#45A538"
                    fill-rule="evenodd"
                    d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#46A037"
                    fill-rule="evenodd"
                    d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#409433"
                    fill-rule="evenodd"
                    d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182-1.72 3.503-3.863 6.77-6.353 9.763-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753c-.865-3.223-1.319-6.504-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4FAA41"
                    fill-rule="evenodd"
                    d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642-2.217-6.628-4.452-13.249-6.7-19.867-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879 2.265 6.703 4.526 13.407 6.768 20.118 2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78c-.056 3.351-.112 6.701-.167 10.052z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4AA73C"
                    fill-rule="evenodd"
                    d="M43.155 32.227c.21.274.511.516.617.826 2.248 6.618 4.483 13.239 6.7 19.867 2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9-1.737-5.187-3.483-10.371-5.242-15.551-.089-.263-.34-.469-.516-.702 1.09-2.947 2.181-5.894 3.272-8.84z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#57AE47"
                    fill-rule="evenodd"
                    d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198-2.242-6.711-4.503-13.415-6.768-20.118-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#60B24F"
                    fill-rule="evenodd"
                    d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#A9AA88"
                    fill-rule="evenodd"
                    d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011c.075 3.334.529 6.615 1.394 9.838-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#B6B598"
                    fill-rule="evenodd"
                    d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#C2C1A7"
                    fill-rule="evenodd"
                    d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#CECDB7"
                    fill-rule="evenodd"
                    d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#DBDAC7"
                    fill-rule="evenodd"
                    d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#EBE9DC"
                    fill-rule="evenodd"
                    d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#CECDB7"
                    fill-rule="evenodd"
                    d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
                    clip-rule="evenodd"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#4FAA41"
                    fill-rule="evenodd"
                    d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
                    clip-rule="evenodd"
                  ></motion.path>
                </motion.svg>
                {/* Java Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  id="java"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ position: "absolute", top: "40%" }}
                >
                  <motion.path
                    variants={pathVariants}
                    fill="#0074BD"
                    d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zM50.522 58.402s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#EA2D2E"
                    d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#0074BD"
                    d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zM54.162 48.647s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#EA2D2E"
                    d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#0074BD"
                    d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#EA2D2E"
                    d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zM53.211 115.037c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zM70.694 119.585h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zM89.982 115.037c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zM37.322 122.931c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701v-22.482h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z"
                  ></motion.path>
                </motion.svg>
                {/* Html Icon */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  x="0px"
                  y="0px"
                  width={`${IconWidth}`}
                  height={`${IconHeight}`}
                  id="html5"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ position: "absolute", top: "15%" }}
                >
                  <motion.path
                    variants={pathVariants}
                    fill="#E44D26"
                    d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#F16529"
                    d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#EBEBEB"
                    d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"
                  ></motion.path>
                  <motion.path
                    variants={pathVariants}
                    fill="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                  ></motion.path>
                </motion.svg>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
