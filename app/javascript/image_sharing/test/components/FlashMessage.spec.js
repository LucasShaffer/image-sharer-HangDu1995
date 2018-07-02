/* eslint-env mocha */
import 'jsdom-global/register';
import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import FlashMessage from '../../components/FlashMessage';
import { Alert } from 'reactstrap';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<FlashMessage />', () => {
  it('should render alert if has flash message', () => {
    const dummyStore = {
      response: {
        status: null,
        message: null
      }
    };
    const wrapper = shallow(<FlashMessage store={dummyStore} />);
    const alert = wrapper.find(Alert);

    expect(alert).to.have.length(0);
  });

  it('should not render alert if has flash message', () => {
    const dummyStore = {
      response: {
        status: 'success',
        message: 'This is an error'
      }
    };
    const wrapper = shallow(<FlashMessage store={dummyStore} />);
    const alert = wrapper.find(Alert);

    expect(alert).to.have.length(1);
    expect(alert.children().text()).to.equal('This is an error');
  })
});
