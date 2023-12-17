import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import { Grid, Button } from "@mui/material";

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

const postList = () => {


    const posts = useSelector(state => state.posts.postList.posts);
    console.log(posts);
    return (
        <div>{
            posts.map((item, index) => (
                <p key={index}>{item._id}</p>
            ))

        }</div>
    )
}

export default postList