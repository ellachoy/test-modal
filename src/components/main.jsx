import React from 'react'

export default function Main() {
  return (
    <div className='main-content'>
      <h1>Main Content</h1>
      <form className='main-forms'>
        <div className='main-content-header'>
          <label>Such SNR</label>
          <input type='text' />
        </div>
        <div className='main-content-main'>
          <div>
            <label>Aktuelles SNR</label>
            <input type='text' />
            <input type='text' />
          </div>
          <div>
            <label>Beschreibung</label>
            <input type='text' />
          </div>
          <div>
            <label>Test</label>
            <input type='text' />
          </div>
          <div>
            <label>Test</label>
            <input type='text' />
          </div>
          <div>
            <label>Test </label>
            <input type='text' />
          </div>
        </div>
      </form>
    </div>
  )
}
