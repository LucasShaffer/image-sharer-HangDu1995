import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import FeedbackForm from './FeedbackForm';
import FlashMessage from './FlashMessage';

@observer
class App extends Component {
  /* Add Prop Types check*/
  static propTypes = {
    stores: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <Header title="Tell us what you think" />
        <FlashMessage store={this.props.stores.feedbackStore} />
        <FeedbackForm store={this.props.stores.feedbackStore} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
