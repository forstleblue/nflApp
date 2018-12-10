import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import SideBar from '../components/Sidebar';

import Explore from './Explore';

// eslint-disable-next-line
export default store => {
  const history = createBrowserHistory();

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
  };

  const rightButtons = (
    <div>
      <IconButton style={{ verticalAlign: 'middle' }} iconStyle={{ color: 'grey' }}>
        <ActionSearch />
      </IconButton>
      <FlatButton label="NEWSFEED" style={buttonStyle} />
      <FlatButton label="EXPLORE" style={buttonStyle} />
    </div>
  );

  const routes = (
    <Router history={history}>
      <div>
        <AppBar
          style={{ position: 'fixed', backgroundColor: 'black' }}
          iconElementLeft={<IconButton />}
          iconElementRight={rightButtons}
        />
        <SideBar />
        <Route path="/" exact component={Explore} />
      </div>
    </Router>
  );

  return routes;
};
