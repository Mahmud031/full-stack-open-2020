import React from 'react'

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
        course.map(course => 
            <div key={course.id}>
                <Header header={course.name} />
                <Content parts={course.parts} />
                <strong>
                    < Total parts={course.parts} />
                </strong>
            </div>)
        
    )

}

export default Course