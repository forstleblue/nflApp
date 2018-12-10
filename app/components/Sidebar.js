import React from 'react';
import { withRouter } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

import nflImage from '../images/icons/nfl.jpeg';
import nikeImage from '../images/icons/nike.jpeg';
import visaImage from '../images/icons/visa.jpeg';

import './style.css';

const styles = {
  followButtonStyle: {
    position: 'relative',
    bottom: 50,
    right: 20,
    float: 'right',
  },
  messageButtonStyle: {
    display: 'block',
    margin: '20px auto',
    width: '60%',
  },
  labelStyle: {
    textAlign: 'center',
    color: 'grey',
  },
};

const contentString =
  "The National Football League is America's most popular sports league, \
  comprised of 32 franchises that compete each year to win the Super Bowl, the world's biggest \
  annual sporting event. Founded in 1920, the NFL developed the model for the successful modern sports league, \
  including extensive revenue sharing, competitive excellence, strong franchises across the broad, and national distribution.";

type Props = {
  history: object,
};

class Sidebar extends React.Component<Props, void> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Drawer open={true} containerStyle={{ top: 64, width: 400 }}>
        <div>
          <img src={nflImage} alt="nfl-image" className="sidebar-logo" />
          <RaisedButton label="Follow" style={styles.followButtonStyle} labelColor="grey" />
          <div className="sidebar-content">
            <h3 className="location-label">NFL Canada</h3>
            <h5 className="country-label">Canada</h5>
            <div className="count-rect">
              <div className="count-rect-item">
                <span className="count-value">700</span>
                <span className="count-label">Posts</span>
              </div>
              <div className="count-rect-item">
                <span className="count-value">123143</span>
                <span className="count-label">Follows</span>
              </div>
              <div className="count-rect-item">
                <span className="count-value">500</span>
                <span className="count-label">Following</span>
              </div>
            </div>
            <RaisedButton
              label="Message"
              style={styles.messageButtonStyle}
              labelColor="#ffffff"
              backgroundColor="black"
            />
            <a className="link-label" href="https://canada.nfl.com">
              https://canada.nfl.com
            </a>
            <span className="detail-label">{contentString}</span>
            <div>
              <h4 className="footer-label">Our Partners</h4>
              <div>
                <img src={visaImage} alt="visa" className="partner-icon" />
                <img src={nikeImage} alt="nike" className="partner-icon" />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    );
  }
}

export default withRouter(Sidebar);
