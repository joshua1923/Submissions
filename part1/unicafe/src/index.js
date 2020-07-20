import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)
  const averageCalc = () => good + neutral + bad / 3
  const allFeedback = () => good + neutral + bad
  const positivePercentage = () => { const bla = allFeedback()
   return (100 * good) / bla
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setToGood()} text='good' />
      <Button onClick={() => setToNeutral()} text='neutral' />
      <Button onClick={() => setToBad()} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} averageCalc={averageCalc} positivePercentage={positivePercentage} />
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistic = (props) => {
  return <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
}

const Statistics = ({good, neutral, bad, allFeedback, averageCalc, positivePercentage}) => {
  if (allFeedback() > 0) {
    return (
      <div>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='All' value={allFeedback()}/>
        <Statistic text='average' value={averageCalc()}/>
        <Statistic text='Percentage' value={positivePercentage()}/>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))