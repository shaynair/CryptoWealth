import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import classNames from 'classnames';

import { authLogoutAndRedirect } from './actions/auth';
import './style.scss';

class App extends React.Component {

  static propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    children: React.PropTypes.shape(),
    dispatch: React.PropTypes.func.isRequired,
    pathName: React.PropTypes.string.isRequired
  };

  logout = () => {
    this.props.dispatch(authLogoutAndRedirect());
  };

  goToIndex = () => {
    this.props.dispatch(push('/'));
  };

  goToProtected = () => {
    this.props.dispatch(push('/protected'));
  };

  goToAnalytics = () => {
    this.props.dispatch(push('/analytics'));
  }


  render() {
    const homeClass = classNames({
      active: this.props.pathName === '/'
    });
    const protectedClass = classNames({
      active: this.props.pathName === '/protected'
    });
    const loginClass = classNames({
      active: this.props.pathName === '/login'
    });
    const analyticsClass = classNames({
      active: this.props.pathName === "/analytics"
    });

    const styles = {
      propStyle: {
        padding: '0px',
        height: '100%',
        width: '100%'
      }
    }

    return (
      <div className="app">
        <nav id="main-nav" className="navbar navbar-inverse bg-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#top-navbar"
                aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
              </button>
              <a className="navbar-brand" tabIndex="0" onClick={this.goToIndex}> CryptoWealth</a>
            </div>
            <div className="collapse navbar-collapse" id="top-navbar">
              { this.props.isAuthenticated ?
                <ul className="nav navbar-nav navbar-right">
                  <li className={homeClass}>
                    <a className="js-go-to-index-button" tabIndex="0" onClick={this.goToIndex}>
                      <i className="fa fa-home" /> Home
                    </a>
                  </li>
                  <li className={analyticsClass}>
                    <a className="" tabIndex="0" onClick={this.goToAnalytics}>  
                      <i className="fa fa-bar-chart" /> Analytics
                    </a>
                  </li>
                  <li> <a className="js-logout-button" tabIndex="0" onClick={this.logout}> Logout </a>
                  </li>
                </ul>
                                :
                <ul className="nav navbar-nav navbar-right">
                  <li className={homeClass}>
                    <a className="js-go-to-index-button" tabIndex="0" onClick={this.goToIndex}>
                      <i className="fa fa-home" /> Home
                                        </a>
                  </li>
                  <li className={loginClass}>
                    <Link className="js-login-button" to="/login">Login</Link>
                  </li>
                </ul>
                            }
            </div>
          </div>
        </nav>

        <div style={styles.propStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    pathName: ownProps.location.pathname
  };
};

export default connect(mapStateToProps)(App);
export { App as AppNotConnected };
