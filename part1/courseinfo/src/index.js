import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>
            {props.header}
        </h1>

    )
}

const Content = (props) => {
    console.log(props.part1)
    return(
        <p>
            < Part partName={props.part1.name} exerciseNo={props.part1.exercises} />
            < Part partName={props.part2.name} exerciseNo={props.part2.exercises} />
            < Part partName={props.part3.name} exerciseNo={props.part3.exercises} />
        </p>
    )
}

const Total = (props) => {
    return(
        <p>
            Number of exercises {props.total}
        </p>
    )
}

const Part = (props) => {
    return(
        <p>
            {props.partName} {props.exerciseNo}
        </p>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
    }
    const part2 = {
    name: 'Using props to pass data',
    exercises: 7
    }
    const part3 = {
    name: 'State of a component',
    exercises: 14
    }
    return (
        <div>
            < Header header={course} />
            < Content part1={part1} part2={part2} part3={part3} />
            < Total total={part1.exercises + part2.exercises + part3.exercises} />
        </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))