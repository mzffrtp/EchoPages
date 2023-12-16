import React, { useState } from "react";
import { AppBar, Button, Container, CssBaseline, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import PenIcon from "@mui/icons-material/Create";
import { styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm"

const MyStyledContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
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
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };
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
            <Button
              onClick={handleOpen}
              color="primary"
              variant="outlined"
              startIcon={<PenIcon />}>
              New Echo
            </Button>
          </Toolbar>
        </AppBar>
        <Grid >
          <Grid item xs={12}>
            <BrowserRouter>
              <Routes>
                <Route exact path="/posts" element={<PostList />} />
              </Routes>
            </BrowserRouter>
          </Grid>
        </Grid>
      </Container>
      <AddPostForm open={open} handleClose={handleClose} />
    </>
  )
}

export default App;
