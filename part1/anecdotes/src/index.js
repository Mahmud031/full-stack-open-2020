import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Button component
const Button = ({ handleClick, name}) => {
    return(
        <button onClick={handleClick}>
            {name}
        </button>
    )
}

// DisplayVote component
const DisplayVote = ({votes, selected}) => {
    return(
        <div>
            has {votes[selected]} votes
        </div>
    )
}

// Random num 
const getRandomNumber = (min, max) => {
    console.log(min, max)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const App = (props) => {
    const [selected, setSelected] = useState(getRandomNumber(0,props.anecdotes.length - 1))
    console.log(selected, props.anecdotes.length, getRandomNumber(0, props.anecdotes.length - 1))

    // array of votes

    var emptyArray = Array(props.anecdotes.length).fill(0)
    const [votes, updateVotes] = useState(emptyArray)

    // next button event
    const onNextButtonClicked = () => {
        var randomNum = getRandomNumber(0,props.anecdotes.length - 1)

        // if the number is equal to the current selected, change it

        while (randomNum === selected) {
            randomNum = getRandomNumber(0,props.anecdotes.length - 1)
        }

        setSelected(randomNum)
    }

    // vote button event
    const onVoteButtonClicked = () => {
        // Create a copy of the current votes and add a new vote
        var newVotes = [... votes] 
        newVotes[selected] += 1

        updateVotes(newVotes)
    }


    return (
    <div>
        {props.anecdotes[selected]}
        <DisplayVote votes={votes} selected={selected} />
        <div>
            <Button handleClick={onVoteButtonClicked} name='vote' />
            <Button handleClick={onNextButtonClicked} name='next anecdote' />
        </div>
    </div>
    )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)