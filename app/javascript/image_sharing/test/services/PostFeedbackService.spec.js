/* eslint-env mocha */
import sinon from 'sinon';
import { PostFeedbackService } from '../../services/PostFeedbackService';
import * as api from '../../utils/helper';

describe('<PostFeedbackService />', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should set success message', () => {
    const store = {
      setResponse() {},
      resetForm() {}
    };

    sandbox.stub(store, 'setResponse');
    sandbox.stub(store, 'resetForm');

    const data = Promise.resolve();
    sandbox.stub(api, 'post').returns(data);

    const service = new PostFeedbackService(store);
    service.postFeedback().then(() => {
      sandbox.assert.calledWith(store.setResponse, true, 'Your comment is added successfully!');
      sandbox.assert.called(store.resetForm);
    });
  });


  it('should set failed message', () => {
    const store = {
      setResponse() {},
      resetForm() {}
    };

    sandbox.stub(store, 'setResponse');
    sandbox.stub(store, 'resetForm');

    const data = Promise.reject(new Error('error'));
    sandbox.stub(api, 'post').returns(data);

    const service = new PostFeedbackService(store);
    service.postFeedback().then(() => {
      sandbox.assert.calledWith(store.setResponse, true, 'Something is not right...');
      sandbox.assert.notCalled(store.resetForm);
    });
  });
});
