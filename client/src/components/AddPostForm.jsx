import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";

const MyStyledContainer = styled('div')(({ theme }) => ({
    paper: {
        padding: theme.spacing(2)
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}));

const AddPostForm = ({ open, handleClose }) => {
    const dispatch = useDispatch();
    const [file, setFile] = useState(null)
    const clearForm = () => {
        reset();
        setFile(null);
        handleClose();
    }
    //!yup and validation
    const tags = ["Please choose a tag!", "fun", "programming", "health", "science"]

    const postSchema = yup.object().shape({
        title: yup.string().required(),
        subTitle: yup.string().required(),
        content: yup.string().min(20).required(),
        tag: yup.mixed().oneOf(tags)
    });

    //!formik
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(postSchema)
    });

    const handleFormSubmit = (data) => {
        console.log("form data-->", { ...data, file });
        clearForm();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{ textAlign: 'center' }}>A new blog? Right away!</DialogTitle>
            <DialogContent>
                <DialogContentText style={{ textAlign: 'center' }}>
                    Please fill in the form to add a new echo!
                </DialogContentText>
                <MyStyledContainer>
                    <form onSubmit={handleSubmit(handleFormSubmit)()} noValidate autoComplete='off' >
                        <TextField
                            id="title"
                            label="Title"
                            name='title'
                            variant='outlined'
                            fullWidth
                            size='small'
                            margin='normal'
                            {...register('title')}
                            error={!!errors?.title}
                            helperText={errors?.title?.message}
                        />
                        <TextField
                            id="subTitle"
                            label="Sub Title"
                            name='subTitle'
                            variant='outlined'
                            size='small'
                            margin='normal'
                            {...register('subTitle')}
                            fullWidth
                        />
                        <Controller
                            name='tag'
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    fullWidth
                                    margin='none'
                                    value={field.value || (tags.length > 0 ? tags[0] : '')}
                                    onChange={(e) => field.onChange(e.target.value)}
                                >
                                    {tags.map((tag, index) => (
                                        <MenuItem key={index} value={tag}>
                                            {tag}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                        <TextField
                            id="content"
                            label="Content"
                            name='content'
                            fullWidth
                            margin='dense'
                            multiline
                            rows={4}
                            variant='outlined'
                            size='small'
                            {...register('content')}
                        />
                        <FileBase64
                            multiple={false}
                            onDone={({ base64 }) => setFile(base64)} />
                    </form>
                </MyStyledContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={clearForm} color='inherit'>Cancel</Button>
                <Button
                    onClick={() => handleSubmit(handleFormSubmit)()}
                    type='submit' variant='outlined' color='primary' form="form">Publish</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddPostForm;
