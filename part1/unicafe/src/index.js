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

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)  

    const onGoodClicked = () => setGood(good + 1)
    const onBadClicked = () => setBad(bad + 1)
    const onNeutralClicked = () => setNeutral(neutral + 1)

    var all = good + neutral + bad
    var avg = ((good * 1) + (neutral * 0) + (bad * -1)) / all
    var positive = (good / all) * 100

    return (
        <div>
            <Header header='give feedback' />
            <br />
            <div>
                <Button handleClick={onGoodClicked} name='good' />
                <Button handleClick={onNeutralClicked} name='neutral' />
                <Button handleClick={onBadClicked} name='bad' />
            </div>
            <br />
            <Header header='statistics' />
            <br />
            <Display name='good' value={good} />
            <Display name='neutral' value={neutral} />
            <Display name='bad' value={bad} />
            <Display name='all' value={all} />
            <Display name='average' value={avg} />
            <Display name='positive' value={positive + ' %'} />
        </div>
    )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)