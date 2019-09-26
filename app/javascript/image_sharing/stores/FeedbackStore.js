import { action, observable } from 'mobx';

export class FeedbackStore {
  /* Implement your feedback store*/
  @observable name = '';
  @observable comment = '';
  @observable message = false;
  @observable response = '';

  @action
  updateName(name) {
    this.name = name;
  }

  @action
  updateComment(comment) {
    this.comment = comment;
  }

  @action
  resetForm() {
    this.name = '';
    this.comment = '';
  }

  @action
  setResponse(status, response) {
    this.message = status;
    this.response = response;
  }
}

export default FeedbackStore;
