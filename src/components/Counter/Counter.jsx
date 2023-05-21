import { Component } from 'react';
import {
  TitleFeedback,
  FeedbackForm,
  ButtonForm,
  ButtonClick,
} from './Counter.styled';
export default class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  handleNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  handleBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  render() {
    return (
      <FeedbackForm>
        <TitleFeedback>Please leave feedback</TitleFeedback>
        <ButtonForm>
          <ButtonClick type="button" onClick={this.handleGood}>
            Good
          </ButtonClick>
          <ButtonClick type="button" onClick={this.handleNeutral}>
            Neutral
          </ButtonClick>
          <ButtonClick type="button" onClick={this.handleBad}>
            Bad
          </ButtonClick>
        </ButtonForm>
        <p>Statistics</p>
        <ul>
          <li>Good : {this.state.good}</li>
          <li>Neutral : {this.state.neutral}</li>
          <li>Bad : {this.state.bad}</li>
        </ul>
      </FeedbackForm>
    );
  }
}
