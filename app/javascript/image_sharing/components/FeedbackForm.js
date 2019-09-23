import React, { Component } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input} from 'reactstrap';

@observer
class FeedbackForm extends Component {
  /* Add Prop Types check*/
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
        <Form>
          <FormGroup>
            <label className="js-name-label">Your Name:</label>
            <Input type="text" className="js-your-name" onChange={(e) => this.props.store.updateName(e.target.value)}
                   value={this.props.store.name} placeholder="please enter your name" />
          </FormGroup>
          <FormGroup>
            <label className="js-comment-label">Your Comment:</label>
            <Input type="textarea" className="js-your-comment" onChange={(e) => this.props.store.updateComment(e.target.value)}
                   value={this.props.store.comment} placeholder="please enter your comment" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
    );
  }
}

export default FeedbackForm;
