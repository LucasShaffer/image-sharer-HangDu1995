/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Body from '../../components/Body';
import FeedbackForm from '../../components/FeedbackForm';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Body />', () => {
  it('should render correctly', () => {
    const dummyStore = {}
    const wrapper = shallow(<Body store={dummyStore} />);
    const text = wrapper.find(FeedbackForm);

    expect(text).to.have.length(1);
  })
});
