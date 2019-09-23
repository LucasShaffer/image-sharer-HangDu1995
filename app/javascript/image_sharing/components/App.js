import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <Header title="Tell us what you think" />

        <form>
          <label htmlFor="comments">
              Comment:

            <div>
              <textarea type="text" name="comment" />
            </div>

            <input type="submit" value="Submit" />
          </label>
        </form>

        <Footer />
      </div>
    );
  }
}

export default inject('stores')(App);
