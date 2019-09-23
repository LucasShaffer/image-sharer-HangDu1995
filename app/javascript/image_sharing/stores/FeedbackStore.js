import { action, observable } from 'mobx';

export class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comment = '';

  @action
  updateName(name) {
    this.name = name;
  }

  @action
  updateComment(comment) {
    this.comment = comment;
  }
}

export default FeedbackStore;
