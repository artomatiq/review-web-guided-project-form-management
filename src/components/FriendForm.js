import React, {useState} from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    // c) use the `update` callback coming in through props
  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // c) use the `submit` callback coming in through props
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label htmlFor='username'>Username </label>
          {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
          <input
            name='username'
            id='username'
            type='text'
            placeholder='type your username'
            value={values.username}
            onChange={update}
          />
        

        <label htmlFor='email'>Email</label>
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input
            name='email'
            id='email'
            type='text'
            placeholder='type your email'
            value={values.email}
            onChange={update}
          />
        
        <label htmlFor='role'>Role </label>
          {/* 🔥 STEP 5 - Make dropdown for role. */}
        <select
          name='role'
          id='role'
          onChange={update}
        >
          <option value={''} disabled selected hidden>select a role</option>
          <option value={'Student'}>Student</option>
          <option value={'Teacher'}>Teacher</option>
          <option value={'Admin'}>Admin</option>
          <option value={'Security'}>Security</option>
        </select>
        

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
