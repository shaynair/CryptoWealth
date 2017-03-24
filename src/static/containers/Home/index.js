import React, { Button } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
<<<<<<< HEAD
import LineGraph from './chart';
=======
import BubbleExample from './chart';
>>>>>>> c8c74bbe97ee53c51e669911eff1d47d465db16f

import CryptoWealthLogo from './images/CryptoWealthLogo.png';

class HomeView extends React.Component {

  static propTypes = {
    statusText: React.PropTypes.string,
    userName: React.PropTypes.string
  };

  render() {

    const styles = {
      containerStyle: {
        width: '100%',
        height: '100%',
      },
      helloStyle: {
        paddingLeft: '270px'
      },
      titleStyle: {
        paddingLeft: '210px'
      },
      descriptionStyle: {
        paddingTop: '0px',
        textAlign: 'center'
      },
      imageStyle: {
        width: 600,
        height: 500
      },
      linkStyle: {
        fontSize: '40px',
        textAlign: 'center',
        paddingTop: '50px'
      }
    };

    return (
      <div className="container" style={styles.containerStyle}>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="imageContainer">
                  <img style={styles.imageStyle} src={CryptoWealthLogo} alt="ReactJs" />
                </div>
              </div>
              <div className="row">
                <div>
                  <h1 style={styles.titleStyle}> CryptoWealth </h1> <h4 style={styles.helloStyle} > Hello, { this.props.userName || 'guest' }. < /h4>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <row>
                <BubbleExample />
              </row>
              <div>
                <LineGraph />
                <h2 style={styles.descriptionStyle}> View your customized portfolio for free today! </h2>
              </div>
              <div>
                <Link style={styles.linkStyle} to="/questionnaire"> Start Questionnaire </Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    statusText: state.auth.statusText
  };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
