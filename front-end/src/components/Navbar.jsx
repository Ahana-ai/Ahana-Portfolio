import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/appLogo.png";
import { styled } from "@mui/material";

const pages = ["Home", "Skills", "Projects", "Blog"];

const MenuText = styled(MenuItem)`
  background-color: #121211;
  color: white;

  &:hover,
  &:active,
  &:focus {
    color: black;
    background-color: #f0f0f0;
    border-radius: 10%;
    font-weight: bold;
    margin-right: 5px;
  }
`;

const Navbar = () => {
  const [currentHash, setCurrentHash] = useState("");
  const handleHashChange = () => {
    const hash = window.location.hash;
    setCurrentHash(hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavLinkClick = (hash) => {
    setCurrentHash(hash);
    window.location.hash = hash;
    handleCloseNavMenu();
  };
  

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);

    handleCloseNavMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#0C134F", opacity: "0.8" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: "50px" }}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuText key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuText>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              height: "50px",
              flexGrow: 1,
            }}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",

                  "&:hover , &:active": {
                    backgroundColor: "#F0F0F0",
                    borderRadius: "10%",
                    fontWeight: "bold",
                    color: "black",
                  },
                  "&:focus": {
                    outline: "2px solid white",
                  },
                }}
              >
                {page}
              </Button>
            ))} */}
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavLinkClick(`#${page.toLowerCase()}`)}
                sx={{
                  my: 2,
                  color:
                    currentHash === `#${page.toLowerCase()}`
                      ? "#a09bdc"
                      : "white",
                  display: "block",
                  "&:hover , &:active ": {
                    backgroundColor: "#F0F0F0",
                    borderRadius: "10%",
                    fontWeight: "bold",
                    color: "black",
                  },
                  "&:focus": {
                    outline: "2px solid white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Social - Icons */}
          <Box
            sx={{
              flexWrap: {
                md: "column",
                xl: "row",
              },
            }}
          >
            <Tooltip title="Visit my Github">
              <IconButton
                href="https://github.com/Ahana-ai/"
                target="_blank"
                sx={{
                  color: "white",
                  background: "rgba(38, 2, 56, 0.1)",
                  borderRadius: "50%",
                  marginRight: "6px",
                  // md: { marginTop: "10px", },
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.5)",

                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    transition: "0.4s linear",
                  },
                }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Visit my LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/ahana-de"
                target="_blank"
                sx={{
                  color: "white",
                  background: "rgba(38, 2, 56, 0.1)",
                  borderRadius: "50%",
                  marginRight: "6px",
                  // sm: { marginTop: "10px", },
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.5)",

                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                    transition: "0.3s linear",
                  },
                }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Button
              sx={{
                color: "white",
                border: "1px solid white",
                padding: "10px",
                margin: "10px",

                "&:hover": {
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bolder",
                  transition: "0.8s linear",
                },
              }}
            >
              Let's Connect
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
