import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList)
  const [formValues, setFormValues] = useState({petName: '', petType: ''})

  const handleChange = (evt) => {
    const {name, value} = evt.target

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    setPets(
      pets.concat(formValues)
    )

    setFormValues({petName: '', petType: ''})
  }

  return <div className='container'>
    <h1>Ready to start GP!</h1>
    {pets.map( (pet, idx) => <p key={idx}>{pet.petName} is a {pet.petType}.<br/><br/></p>)}

    <form onSubmit={handleSubmit}>
      <label htmlFor='petName'/>
      <input
        type='text'
        name='petName'
        id='petName'
        placeholder='Pet Name'
        value={formValues.petName}
        onChange={handleChange}
      />

    <label htmlFor='petType'/>
      <input
        type='text'
        name='petType'
        id='petType'
        placeholder='Pet Type'
        value={formValues.petType}
        onChange={handleChange}
      />

      <button type='submit' style={{display: 'block'}}>Add Pet</button>

    </form>

  </div>
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
