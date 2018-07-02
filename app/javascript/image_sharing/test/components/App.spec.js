/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import App from '../../components/App';
import Header from '../../components/Header';
import Body from '../../components/Body';
import FlashMessage from '../../components/FlashMessage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render correctly', () => {
    const stores = {
      feedbackStore: {}
    };
    const wrapper = shallow(<App.wrappedComponent stores={stores} />);
    const header = wrapper.find(Header);
    const body = wrapper.find(Body);
    const flashMessage = wrapper.find(FlashMessage);

    expect(header).to.have.length(1);
    expect(body).to.have.length(1);
    expect(flashMessage).to.have.length(1);
  });
});
