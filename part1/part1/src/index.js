import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.parts.parts[0].name} exercise = {props.parts.parts[0].exercises} />
      <Part part = {props.parts.parts[1].name} exercise = {props.parts.parts[1].exercises} />
      <Part part = {props.parts.parts[2].name} exercise = {props.parts.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return <p>Number of exercises {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course = {course} />
      <Content parts = {course}/>
      <Total parts = {course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))