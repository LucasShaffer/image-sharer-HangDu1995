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
      setResponse: sandbox.stub(),
      resetForm: sandbox.stub()
    };

    sandbox.stub(api, 'post').resolves();

    const service = new PostFeedbackService(store);
    service.postFeedback().then(() => {
      sandbox.assert.calledWith(store.setResponse, 'Your comment is added successfully!');
      sandbox.assert.called(store.resetForm);
    });
  });


  it('should set failed message', () => {
    const store = {
      setResponse: sandbox.stub(),
      resetForm: sandbox.stub()
    };

    sandbox.stub(api, 'post').rejects(new Error('error'));

    const service = new PostFeedbackService(store);
    service.postFeedback().then(() => {
      sandbox.assert.calledWith(store.setResponse, 'Something is not right...');
      sandbox.assert.notCalled(store.resetForm);
    });
  });
});
