import React from 'react'
import ReactDOM from 'react-dom'

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
            {props.partName} {props.exerciseNo}
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
      < Content partName={part1} exerciseNo={exercises1} />
      < Content partName={part2} exerciseNo={exercises2} />
      < Content partName={part3} exerciseNo={exercises3} />
      < Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))