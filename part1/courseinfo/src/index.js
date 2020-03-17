import React from 'react'
import ReactDOM from 'react-dom'

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = (props) => {
    return(
        <div>
            <h1>
                {props.header}
            </h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            <p>
                < Part partName={props.part1} exerciseNo={props.exercises1} />
                < Part partName={props.part2} exerciseNo={props.exercises2} />
                < Part partName={props.part3} exerciseNo={props.exercises3} />
            </p>
    </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>
                Number of exercises {props.total}
            </p>
        </div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p>
                {props.partName} {props.exerciseNo}
            </p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <div>
            < Header header={course} />
            < Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            < Total total={exercises1 + exercises2 + exercises3} />
        </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))