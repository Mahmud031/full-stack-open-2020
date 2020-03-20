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
    console.log(props.parts)
    return(
        props.parts.map(parts => < Part key={parts.id} partName={parts.name} exerciseNo={parts.exercises} />)
    )
}

const Total = (props) => {
    var total = props.parts.reduce((accumulator, parts) => accumulator + parts.exercises, 0)
    console.log(total)
    return(
        <p>
            total of {total} exercises
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

// Course component
const Course = (props) => {
    const {course} = props
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
        </div>
    )

}


const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
      }
    return (
        <div>
            < Course course={course} />
            <strong>
                < Total parts={course.parts} />
            </strong>
        </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))