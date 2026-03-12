import React from 'react'

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  console.log('total exercises:', total)
  return (
    <>
      <h1>{course.name}</h1>

      {course.parts.map((part) => (
        <li key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
      <p>total of: {total} exercises</p>
    </>
  )
}

export default Course
