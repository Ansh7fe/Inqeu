import { Button, Grid, List, Paper, Typography, Stack } from '@mui/material'
import React, { useEffect } from 'react';
import './styles.css'
import { useParams } from 'react-router-dom';
import PostCards from './PostCards/PostCards';
import Select from './Select/Select';
import UserQA from './UserQA/UserQA';
import { useSelector, useDispatch } from 'react-redux';
import { listPosts } from '../../actions/posts';

const Post = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listPosts(keyword));
  }, [keyword]);
  let { posts } = useSelector(state => state.postList);
  let reversePosts = [...posts].reverse();
  const userData = useSelector(state => state.userLogin);
  return (
    <Paper className='post_container'
      sx={{
        padding: {
          xs: '1em',
          sm: '1em',
          md: '2em',
          lg: '3em'
        }
      }}>
      <Grid container className='posts_grid' direction='row'>
        <Grid item xs={12} md={2} lg={2} marginBottom={2} className='postTopics_container'>
          <Stack spacing={4}>
            <Typography variant='p' fontWeight='600' color='#880ed4' marginTop='2em'>
              Topics
            </Typography>
            <List className='postTopic_list'>
              <Select name='Carrer' />
              <Select name='Relationship' />
              <Select name='Job' />
              <Select name='Marriage' />
            </List>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7} lg={7} border='1px solid #e5c3fa' className='postContainer'>
          <UserQA />
          {reversePosts.map(post => (
            <PostCards data={post} key={post._id} />
          ))}
        </Grid>
        <Grid item xs={12} md={2} lg={2} border='1px solid #e5c3fa' className='postProfile_contaier'>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Post