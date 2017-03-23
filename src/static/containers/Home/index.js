import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import BubbleExample from './chart';

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
        paddingTop: '100px'
      },
      imageStyle: {
        width: 600,
        height: 550
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
                  <h1 style={styles.titleStyle}> CryptoWealth < /h1> <h4 style={styles.helloStyle} > Hello, { this.props.userName || 'guest' }. < /h4>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <h1 style={styles.descriptionStyle}> If you dont want to be poor forever then click the button below!! </h1>
              </div>

              <div>
                <Link to="/questionnaire">Start Questionnaire </Link>
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
