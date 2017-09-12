import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// Youtube api key
const API_KEY = 'AIzaSyDiHTNEiek3_OlfElpEURNk6CdpDTUpCIw';


// create new component this will produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'basketball'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}


// Take this component and generate HTML
//
ReactDOM.render(<App />, document.querySelector('.container'));
