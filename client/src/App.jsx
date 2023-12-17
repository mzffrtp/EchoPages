import React, { useEffect, useState } from "react";
import { AppBar, Button, Container, CssBaseline, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import PenIcon from "@mui/icons-material/Create";
import { styled } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import AddPostForm from "./components/AddPostForm"
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { getPosts } from "./redux/postSlice";

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
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false)
  };

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <>
      <CssBaseline />
      <Container>
        <AppBar position="static" sx={{ bgcolor: "Menu" }} elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit">
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
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/post" element={<PostList />} />
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
