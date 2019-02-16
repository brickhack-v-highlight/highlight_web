import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import JumboVideo from './JumboVideo';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => <Dashboard setUrl={this.setUrl} />}
          />
          <Route exact={true} path="/jumbo" render={() => <JumboVideo />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
