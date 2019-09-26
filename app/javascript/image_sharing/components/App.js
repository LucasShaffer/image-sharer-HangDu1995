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
    stores: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.store = this.props.stores.feedbackStore;
  }


  render() {
    return (
      <div>
        <Header title="Tell us what you think" />
        <FlashMessage store={this.store} />
        <FeedbackForm store={this.store} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
