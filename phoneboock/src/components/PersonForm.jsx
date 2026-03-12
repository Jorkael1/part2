import React from 'react'

function PersonForm({
  newName,
  number,
  addPersons,
  handlePersonsChange,
  handleNumberChange,
}) {
  return (
    <div>
      <form onSubmit={addPersons}>
        <div>
          name: <input value={newName} onChange={handlePersonsChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}

export default PersonForm
