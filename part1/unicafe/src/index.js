import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Header component
const Header = (props) => {
    return (
        <h1>
            {props.header}
        </h1>
    )
}

// Button component
const Button = ({ handleClick, name}) => {
    return(
        <button onClick={handleClick}>
            {name}
        </button>
    )
}

// Display component
const Display = ({name, value}) => {
    return(
        <div>
            {name} {value}
        </div>
    )
}

// Add table row

const TableRow = ({name, value}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
    )
}

// statistics component
const Statistics = ({good, neutral, bad}) => {
    if (good === 0 && neutral === 0 && bad === 0){
        return (
            <>
                No feedback given
            </>
        )
    }
    else {
        var all = good + neutral + bad
        var avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all
        var positive = (good / all) * 100

/*        return (
            <>
                <Display name='good' value={good} />
                <Display name='neutral' value={neutral} />
                <Display name='bad' value={bad} />
                <Display name='all' value={all} />
                <Display name='average' value={avg} />
                <Display name='positive' value={positive + ' %'} />
            </>
        )*/

        // for 1.11
        return(
            <table>
                <tbody>
                    <TableRow name='good' value={good} />
                    <TableRow name='neutral' value={neutral} />
                    <TableRow name='bad' value={bad} />
                    <TableRow name='all' value={all} />
                    <TableRow name='average' value={avg.toFixed(1)} />
                    <TableRow name='positive' value={positive.toFixed(1) + ' %'} />
                </tbody>
            </table>
        )
    }
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)  

    const onGoodClicked = () => setGood(good + 1)
    const onBadClicked = () => setBad(bad + 1)
    const onNeutralClicked = () => setNeutral(neutral + 1)

    return (
        <div>
            <Header header='give feedback' />
            <br />
            <div>
                <Button handleClick={onGoodClicked} name='good' />
                <Button handleClick={onNeutralClicked} name='neutral' />
                <Button handleClick={onBadClicked} name='bad' />
            </div>
            <Header header='statistics' />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)