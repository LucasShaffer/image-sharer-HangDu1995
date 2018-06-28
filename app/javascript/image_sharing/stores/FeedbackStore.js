import { action, observable } from 'mobx';

export class FeedbackStore {
  @observable userName;
  @observable comments;
  @observable response;

  constructor() {
    this.userName = '';
    this.comments = '';
    this.response = {
      status: null,
      message: null
    }
  }

  @action
  setUserName(name) {
    this.userName = name;
  }

  @action
  setComments(comments){
    this.comments = comments;
  }

  @action
  setResponse(status, message) {
    this.response.status = status;
    this.response.message = message;
  }

  @action
  resetForm() {
    this.userName = '';
    this.comments = '';
  }
}

export default FeedbackStore;
