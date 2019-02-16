import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Box, Grommet, Heading } from 'grommet';
import { Rss, Close } from 'grommet-icons';
import { subscribeToMediaServer } from './api';
// twitchToId: mapping of twitch urls to their ids
// herokuString: url string of the heroku microservice used to set a phone as active
import { twitchToId, herokuString } from '../config';
import https from 'https';

const sendGet = url => {
  https.get(url, resp => {}).on('error', err => {});
};

const store = require('store');

class Dashboard extends Component {
  state = {
    videoUrls: [],
    urlBuffer: [],
    url: 'no url yet',
    maxVideos: 4
  };

  componentDidMount() {
    subscribeToMediaServer((err, url) => {
      const { videoUrls, maxVideos } = this.state;

      if (videoUrls.length < maxVideos) {
        if (!videoUrls.includes(url)) {
          this.setState({
            videoUrls: [...videoUrls, url],
            url
          });
        }
      } else {
        this.setState({
          urlBuffer: [...this.state.urlBuffer, url],
          url
        });
      }
    });
  }

  removeVideo = url =>
    this.setState({ videoUrls: this.state.videoUrls.filter(x => x !== url) });

  selectVideo = url => {
    sendGet(herokuString + twitchToId[url]);
    store.set('url', { url });
  };

  renderVideo = url => {
    return (
      <Box direction="column" key={url}>
        <ReactPlayer
          url={url}
          width={180}
          height={320}
          playing
          config={{
            twitch: {
              options: {}
            }
          }}
        />
        <Box direction="row" justify="center">
          <Close onClick={() => this.removeVideo(url)} />
          <Rss onClick={() => this.selectVideo(url)} />
        </Box>
      </Box>
    );
  };

  render() {
    const { videoUrls } = this.state;

    return (
      <Grommet plain>
        Last received url: {this.state.url}
        <Box direction="row" justify="center">
          <Heading textAlign="center">highlight</Heading>
        </Box>
        <Box direction="row" justify="center">
          {videoUrls.map(url => this.renderVideo(url))}
        </Box>
      </Grommet>
    );
  }
}

export default Dashboard;
