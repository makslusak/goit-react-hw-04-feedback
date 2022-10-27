import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const handleIncrement = evt => {
    const { name } = evt.target;
    feedback[name](prev => prev + 1);
    console.log(feedback[name]);
  };

  const countTotal = () => {
    let total = bad + neutral + good;
    return total;
  };

  const countPositive = () => {
    let positivePerc = Math.round((good * 100) / (bad + neutral + good));
    return isNaN(positivePerc) ? '0%' : `${positivePerc}%`;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions handleIncrement={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          countTotal={countTotal}
          countPositive={countPositive}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Section>
    </>
  );
};
