import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  // chaque personne doit avoir un identifiant unique pour la clé React
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  //gestion des erreurs
  const [errorMessage, setErrorMessage] = useState(null)
  //notiffication
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes)
    })
  }, [])

  const personfilter =
    searchTerm === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )

  const handlePersonsChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }
  const handleFilterPerson = (event) => {
    setSearchTerm(event.target.value)
  }

  const addPersons = (event) => {
    event.preventDefault()
    const existingPerson = persons.find((perso) => perso.name === newName)
    const person = {
      name: newName,
      number: number,
    }
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        personService
          .update(existingPerson.id, { ...existingPerson, number: number })
          .then((returnedPerson) => {
            setPersons(
              persons.map((pers) =>
                pers.id !== existingPerson.id ? pers : returnedPerson,
              ),
            )
            setNotificationMessage(`Updated ${returnedPerson.name}`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000)
            setNewName('')
            setNumber('')
          })
          .catch((error) => {
            console.log(error)
            setErrorMessage(
              `Information of ${existingPerson.name} has already been removed from server`,
            )

            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)

            setPersons(persons.filter((p) => p.id !== existingPerson.id))
          })
      }
    } else {
      personService.create(person).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNotificationMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
        setNewName('')
        setNumber('')
      })
    }
  }

  // const addPersons = (event) => {
  //   event.preventDefault()
  //   const person = { name: newName, number: number }
  //   if (persons.find((person) => person.name === newName)) {
  //     alert(`${newName} is already added to phonebook`)
  //     return
  //   }

  //   personService.create(person).then((returnPersons) => {
  //     setPersons(persons.concat(returnPersons))
  //     setNewName('')
  //     setNumber('')
  //   })
  // }
  const deletePerson = (id, name) => {
    if (window.confirm(`Delet ${name} ?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type='success' />
      <Notification message={errorMessage} type='error' />
      <Filter searchTerm={searchTerm} handleFilterPerson={handleFilterPerson} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        number={number}
        addPersons={addPersons}
        handlePersonsChange={handlePersonsChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={personfilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App
