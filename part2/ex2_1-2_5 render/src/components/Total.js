import React from 'react';

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  const total = exercises.reduce((accumulator, currentValue) => accumulator + currentValue)

    return <h4>Total of {total} exercises</h4>
  }

export default Total;