import React from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (course) => {
    return (
        <div>
        <Header course = {course.course[0]} />
        <Content parts = {course.course[0].parts}/>
        <Total parts = {course.course[0].parts} />

        <Header course = {course.course[1]} />
        <Content parts = {course.course[1].parts}/>
        <Total parts = {course.course[1].parts} />
      </div>
    )
}

export default Course;