import {Component} from 'react'
import './index.css'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  state = {isPlaying: false}

  changePlayer = () => {
    const {isPlaying} = this.state
    this.setState({isPlaying: !isPlaying})
  }

  start = () => {
    console.log('fwfwef')
  }

  render() {
    const {isPlaying} = this.state
    const text = isPlaying ? 'Pause' : 'Play'
    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            playing={isPlaying}
            onStart={this.start}
          />
        </div>
        <button type="button" onClick={this.changePlayer}>
          {text}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
