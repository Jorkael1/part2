import React from 'react'
function Filter({ searchTerm, handleFilterPerson }) {
  return (
    <>
      <div>
        Filtrer par nom:{' '}
        <input
          value={searchTerm}
          onChange={handleFilterPerson}
          placeholder='Rechercher...'
        />
      </div>
    </>
  )
}

export default Filter
