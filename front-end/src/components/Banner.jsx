import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "4th Year Student",
  "Web Developer",
  "Problem Solver in Leetcode",
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={7}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                margin: {
                  md: "25% 30% 20px 30%",
                  xs: "20px 10%",
                },
              }}
            >
              Hi!! This is Ahana De!!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                margin: {
                  md: "2% 30% 20px 30%",
                  xs: "20px 10%",
                },
              }}
            >
              {"I am  "}
              <TextTransition springConfig={presets.wobbly} inline={true}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </Typography>
          </Grid>
          <Grid item md={5}>
            <h1>Byeeeeeeeeeeeeeee</h1>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
