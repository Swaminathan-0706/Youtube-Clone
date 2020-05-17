import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>{
    
    const listOfVideos=videos.map((a,id)=><VideoItem onVideoSelect={onVideoSelect} key={id} video={a} />)
    return (
        <Grid container spacing={10}>
        {listOfVideos}
        </Grid>
        
    );
    
    

}
export default VideoList;
