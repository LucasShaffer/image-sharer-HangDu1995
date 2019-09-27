import { post } from '../utils/helper';

export class PostFeedbackService {
  /* Implement your service */
  postFeedback(data) {
    return post('/api/feedbacks', data).then(() => {
      return { success: true };
    })
      .catch(() => {
        return { success: false };
      });
  }
}

export default PostFeedbackService;
