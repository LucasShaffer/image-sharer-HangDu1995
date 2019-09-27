/* eslint-env mocha */
import * as assert from 'assert';
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

  it('should return success', () => {
    const data = {
      name: 'Jack',
      comment: 'Good'
    };

    sandbox.stub(api, 'post').resolves();

    const service = new PostFeedbackService();
    service.postFeedback(data).then((response) => {
      assert.ok(response.success);
    });
  });

  it('should return failure', () => {
    const data = {
      name: 'Jack',
      comment: 'Good'
    };

    sandbox.stub(api, 'post').rejects(new Error('error'));

    const service = new PostFeedbackService();
    service.postFeedback(data).then((response) => {
      assert.ok(!response.success);
    });
  });
});
