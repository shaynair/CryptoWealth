import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';
import reactLogo from './images/react-logo.png';
import reduxLogo from './images/redux-logo.png';

class HomeView extends React.Component {

    constructor(props){
        super(props);
    }

    static propTypes = {
        statusText: React.PropTypes.string,
        userName: React.PropTypes.string
    };

    render() {
        return (
            <div className="container">
                <div className="margin-top-medium text-center">
                    <img className="page-logo margin-bottom-medium"
                         src={reactLogo}
                         alt="ReactJs"
                    />
                    <img className="page-logo margin-bottom-medium"
                         src={reduxLogo}
                         alt="Redux"
                    />
                </div>
                <div className="text-center">
                    <h1>CryptoWealth Demo</h1>
                    <h4>Hello, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="margin-top-medium">
                    {this.props.statusText ?
                        <div className="alert alert-info">
                            {this.props.statusText}
                        </div>
                        :
                        null
                    }
                </div>
                <div className="row">
                    <Link className="btn btn-default col-md-4 col-md-offset-4" to="/questionnaire">

                        Start Questionnaire
                    </Link>

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
