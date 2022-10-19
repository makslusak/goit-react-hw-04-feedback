import React, { Fragment, Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countPositive = () => {
    let positivePerc = Math.round(
      (this.state.good * 100) /
        (this.state.bad + this.state.neutral + this.state.good)
    );

    return isNaN(positivePerc) ? '0%' : `${positivePerc}%`;
  };
  countTotal = () => {
    let total = this.state.bad + this.state.neutral + this.state.good;
    return total;
  };
  incrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  incrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  incrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            incrementGood={this.incrementGood}
            incrementNeutral={this.incrementNeutral}
            incrementBad={this.incrementBad}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            countTotal={this.countTotal}
            countPositive={this.countPositive}
            state={this.state}
          />
        </Section>
      </>
    );
  }
}
