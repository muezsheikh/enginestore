import React from 'react'

const EmailSection = () => {
  return (
    <div className='emailSectionContainer'>
      <div className='leftEmail'>
        <p>Be the First One to Know</p>
        <h1>get the latest trend first</h1>
        <p>
          Get the latest details about the special offers, new product launches
          and events.
        </p>
      </div>
      <div className='rightEmail'>
        <div className='emailSectionInput'>
          <input type='text' placeholder='enter email here' />
          <button>subscribe now</button>
        </div>
        <div className='emailSectionP'>
          <p>Be A Part of Engine Family</p>
        </div>
      </div>
    </div>
  )
}

export default EmailSection
