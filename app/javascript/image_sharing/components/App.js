import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from "prop-types";
import FeedbackForm from "./FeedbackForm";

@observer
class App extends Component {
  /* Add Prop Types check*/
  static propTypes = {
    stores: PropTypes.object.isRequired
  }

  render() {
    const store = this.props.stores.feedbackStore;
    return (
      <div>
        <Header title="Tell us what you think" />
        <FeedbackForm store={store} />
        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
