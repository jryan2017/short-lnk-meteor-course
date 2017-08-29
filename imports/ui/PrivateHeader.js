import React from 'react';
import PropTypes from 'prop-types'
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';

class PrivateHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    onLogout() {
        Accounts.logout(() => {
            this.props.history.replace("/");
        });
    }
    render() {
        return(
            <div className="header">
                <div className="header__content">
                    <h1 className="header__title">{this.props.title}</h1>
                    <button className="button button--link-text" onClick={this.onLogout.bind(this)}>Logout</button>
                </div>
            </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default withRouter(PrivateHeader);

