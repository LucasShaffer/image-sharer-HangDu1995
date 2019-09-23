/* eslint-env mocha */
import assert from 'assert';
import FeedbackStore from "../../stores/FeedbackStore";

describe('<FeedbackStore />', () => {
  it('should update name', () => {
    const store = new FeedbackStore;
    const new_name = 'Jack'
    store.updateName(new_name)

    assert.strictEqual(store.name, new_name);
  });

  it('should update comment', () => {
    const store = new FeedbackStore;
    const new_comment = 'good'
    store.updateComment(new_comment)

    assert.strictEqual(store.comment, new_comment);
  });
});

