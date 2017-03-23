import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default function requireAuthentication(Component, DefaultComponent = null) {
  class AuthenticatedComponent extends React.Component {

    static propTypes = {
      isAuthenticated: React.PropTypes.bool.isRequired,
      location: React.PropTypes.shape({
        pathname: React.PropTypes.string.isRequired
      }).isRequired,
      dispatch: React.PropTypes.func.isRequired
    };

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.isAuthenticated && DefaultComponent === null) {
        const redirectAfterLogin = this.props.location.pathname;
        this.props.dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    }

    render() {
      return (
        <div>
          {this.props.isAuthenticated === true
                        ? <Component {...this.props} />
                        : (DefaultComponent ?  <DefaultComponent {...this.props} /> : null)
                    }
        </div>
      );
    }
    }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token
    };
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}
