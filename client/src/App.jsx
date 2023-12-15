import React from "react";
import { AppBar, Button, Container, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import PenIcon from "@mui/icons-material/Create";
import { styled } from '@mui/material/styles';

const MyStyledContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  /* Your styles here */
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    marginTop: theme.spacing(2)
  }
}));

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <AppBar position="static" sx={{ bgcolor: "Menu" }} elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              {/* Your Icon */}
            </IconButton>
            <Typography variant="h6" color="secondary" sx={{ letterSpacing: 6, flexGrow: 1 }} >
              <a href="http://localhost:5173/posts">EchoPages</a>
            </Typography>
            <Button color="primary" variant="outlined" startIcon={<PenIcon />}>
              New Echo
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  )
}

export default App;
