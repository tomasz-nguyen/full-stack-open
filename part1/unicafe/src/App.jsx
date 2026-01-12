import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <div>
            {text} {value}
        </div>
    )
}

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad

    if (all === 0) {
        return (
            <>
                <h1>statistics</h1>
                <div>No feedback given</div>
            </>
        )
    }

    const average = (all > 0) ? (props.good - props.bad) / all : 0
    const positive = (all > 0) ? props.good / all * 100 : 0

    return (
        <>
            <h1>statistics</h1>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>

            <Button
                onClick={() => setGood(good + 1)}
                text='good'
            />
            <Button
                onClick={() => setNeutral(neutral + 1)}
                text='neutral'
            />
            <Button
                onClick={() => setBad(bad + 1)}
                text='bad'
            />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App