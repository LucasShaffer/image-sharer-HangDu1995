/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('should display the footer text', () => {
    const wrapper = shallow(<Footer />);
    assert.strictEqual(wrapper.find('.js-footer').text(), 'Copyright: Appfolio Inc. Onboarding');
  });
});
