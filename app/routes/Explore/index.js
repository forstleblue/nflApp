import React from 'react';
import { connect } from 'react-redux';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import { Tabs, Tab } from 'material-ui/Tabs';

import './style.css';

// We can use API results later for getting player list.
import cory from '../../images/athletes/cory.jpeg';
import israel from '../../images/athletes/israel.jpeg';
import jamaal from '../../images/athletes/jamaal.jpeg';
import watt from '../../images/athletes/watt.jpeg';
import jon from '../../images/athletes/jon.jpeg';
import julio from '../../images/athletes/julio.jpeg';
import tony from '../../images/athletes/tony.jpeg';
import face1 from '../../images/faces/face1.jpeg';
import face2 from '../../images/faces/face2.jpeg';
import face3 from '../../images/faces/face3.jpeg';
import face4 from '../../images/faces/face4.jpeg';
import face5 from '../../images/faces/face5.jpeg';
import face6 from '../../images/faces/face6.jpeg';
import face7 from '../../images/faces/face7.jpeg';
import mark from '../../images/icons/mark.jpeg';

const players = [
  {
    name: 'Cory Greenwood',
    team: 'Edmonton Eskimos',
    role: 'Linebacker',
    image: cory,
    face: face1,
  },
  {
    name: 'Israel Idonije',
    team: 'Detrot Lions',
    role: 'Defense End',
    image: israel,
    face: face2,
  },
  {
    name: 'Jamaal Westerman',
    team: 'Montreal Alouettes',
    role: 'Defensive Lineman',
    image: jamaal,
    face: face3,
  },
  {
    name: 'JJ Watt',
    team: 'Houston Texans',
    role: 'Defensive End',
    image: watt,
    face: face4,
  },
  {
    name: 'Jon Ryan',
    team: 'Seattle Seahawks',
    role: 'Punter',
    image: jon,
    face: face5,
  },
  {
    name: 'Julio Jones',
    team: 'Atlanta Falcons',
    role: 'Wide Receiver',
    image: julio,
    face: face6,
  },
  {
    name: 'Thomas Mon',
    team: 'Atlanta Falcons',
    role: 'Wide Receiver',
    image: tony,
    face: face7,
  },
];

const styles = {
  tab: {
    color: 'lightgrey',
    backgroundColor: '#ffffff',
  },
  activeTab: {
    color: 'grey',
    backgroundColor: '#ffffff',
    borderBottom: '2px solid black',
  },
  tabItemContainerStyle: {
    backgroundColor: '#ffffff',
    borderBottom: 'solid 2px lightgrey',
    zIndex: 100,
    position: 'fixed',
    width: 'calc(100% - 400px)',
  },
  followButtonStyle: {
    position: 'relative',
    bottom: 50,
    right: 20,
    float: 'right',
  },
  messageButton: {
    float: 'left',
    marginLeft: 10,
  },
  sessionButton: {
    float: 'right',
    marginRight: 10,
  },
};

type Props = {
  location: object,
  messages: Array,
};

class Explore extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      players: players,
    };
  }

  handleChange = value => {
    this.setState({ activeTab: value });
  };

  handleUpdateInput = value => {
    let filters = [];
    if (value) {
      filters = players.filter(p => p.name.includes(value));
    } else {
      filters = players;
    }
    this.setState({ players: filters });
  };

  renderAthletes = () => (
    <div className="tab-content">
      <AutoComplete
        floatingLabelText={
          <div style={{ marginLeft: 20 }}>
            <ActionSearch style={{ color: 'grey' }} />
            <h4 style={{ display: 'inline', marginLeft: 20 }}>Search Athletes</h4>
          </div>
        }
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={players.map(p => p.name)}
        onUpdateInput={this.handleUpdateInput}
        fullWidth
      />
      <div>
        {this.state.players.map((player, index) => (
          <div className="player" key={index}>
            <img src={player.image} className="background" />
            <div className="logo">
              <img src={player.face} className="face" />
              <img src={mark} className="mark" />
            </div>
            <RaisedButton label="Follow" style={styles.followButtonStyle} labelColor="grey" />
            <h5 className="name">{player.name}</h5>
            <h5 className="role">Football | {player.role}</h5>
            <h5 className="team">{player.team}</h5>
            <RaisedButton label="Message" style={styles.messageButton} labelColor="#ffffff" backgroundColor="black" />
            <RaisedButton
              label="Book Session"
              style={styles.sessionButton}
              labelColor="#ffffff"
              backgroundColor="darkred"
            />
          </div>
        ))}
      </div>
    </div>
  );

  render() {
    const { activeTab } = this.state;

    return (
      <div className="main-body">
        <Tabs
          onChange={this.handleChange}
          inkBarStyle={{ background: 'black', zIndex: 1000 }}
          tabItemContainerStyle={styles.tabItemContainerStyle}
          className="main-tab"
        >
          <Tab label="Posts" value={0} buttonStyle={activeTab === 0 ? styles.activeTab : styles.tab} />
          <Tab label="OUR ATHELETS" value={1} buttonStyle={activeTab === 1 ? styles.activeTab : styles.tab}>
            {this.renderAthletes()}
          </Tab>
          <Tab label="PHOTOS" value={2} buttonStyle={activeTab === 2 ? styles.activeTab : styles.tab} />
          <Tab label="VIDEOS" value={3} buttonStyle={activeTab === 3 ? styles.activeTab : styles.tab} />
          <Tab label="EVENTS" value={4} buttonStyle={activeTab === 4 ? styles.activeTab : styles.tab} />
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
});

export default connect(
  mapStateToProps,
  {},
)(Explore);
