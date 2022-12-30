import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (total) => {
    return Math.floor((this.state.good / total) * 100);
  }

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions 
            options={this.state} 
            onLeaveFeedback={this.onLeaveFeedback} 
          />
        </Section>
        <Section title='Statistics'>
          {total ? (
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage} 
            />
          ) : (
            <Notification message='There is no feedback!' />
          )}
        </Section>
      </>
    )
  }
}
