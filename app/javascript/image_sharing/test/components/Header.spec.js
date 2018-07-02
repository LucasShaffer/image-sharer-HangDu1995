/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import Header from '../../components/Header';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header title={'Title'} />);
    const title = wrapper.find('h3');

    expect(title).to.have.length(1);
    expect(title.text()).to.equal('Title');
  })
});
