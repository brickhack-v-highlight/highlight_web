import React from 'react';
import ReactPlayer from 'react-player';

const store = require('store');

export default class JumboVideo extends React.Component {
  state = {
    url: ''
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (store.get('url')) {
        const newUrl = store.get('url').url;
        if (newUrl !== this.state.url) {
          this.setState({ url: newUrl });
        }
      }
    }, 100);
    if (store.get('url')) {
      const newUrl = store.get('url');
      if (newUrl) {
        this.setState({ url: newUrl.url });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <ReactPlayer url={this.state.url} playing width={730} height={800} />
    );
  }
}
