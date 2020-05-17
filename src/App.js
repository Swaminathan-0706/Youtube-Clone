import React from 'react';
import {Grid} from '@material-ui/core';
import SearchBar from './Component/SearchBar';
import VideoDetail from './Component/VideoDetail';
import VideoList from './Component/VideoList';

// import {SearchBar,VideoList,VideoDetail} from './Component';
import youtube from './Api/youtube';

class App extends React.Component
{   
    state={
        videos:[],
        selectedVideo:null,
    }
    componentDidMount(){
        this.getSearchVideos('Reactjs');
    }
    //Function to Fetch videos from Youtube
    getSearchVideos=async (keyWord)=>{
        const response=await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyAC0q1A0OCwvRMDpbIsbdvTJ9wboqmKLuE',
                q:keyWord
            }
        });
        
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })

    }
    onVideoSelect=(s)=>{
            this.setState({
                selectedVideo:s
            })
    }
    render(){
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid justify="center" container spacing={10}>
                        <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.getSearchVideos}/>
                        </Grid>
                        <Grid item xs={8}>
                        <VideoDetail video={this.state.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        )
    }
}


export default App;