import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';
import CryptoWealthLogo from './images/CryptoWealthLogo.png';

class HomeView extends React.Component {

  static propTypes = {
    statusText: React.PropTypes.string,
    userName: React.PropTypes.string
  };

  render() {
    return (
        <div className="container">
            <div className="margin-top-medium text-center">
                <img className="page-logo margin-bottom-medium"
                    src={CryptoWealthLogo}
                    alt="ReactJs"
                />
            </div>
            <div className="text-center">
              <h1 > CryptoWealth < /h1> <h4 > Hello, { this.props.userName || 'guest' }. < /h4>
            </div> <div className="margin-top-medium"> {
                this.props.statusText ? <div className="alert alert-info"> { this.props.statusText }
                </div> :null
            }

            <div>
              <h1> If you don't want to be poor forever then click the button below!! </h1>
            </div>
            </div>
            <div className="row">
              <Link className="btn btn-default col-md-4 col-md-offset-4" to="/questionnaire">Start Questionnaire </Link>
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
