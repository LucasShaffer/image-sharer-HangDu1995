import { observer } from 'mobx-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

@observer
class FlashMessage extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="message">
        {this.props.store.response &&
        <Alert>
          {this.props.store.response}
        </Alert>
        }
      </div>
    );
  }
}

export default FlashMessage;

