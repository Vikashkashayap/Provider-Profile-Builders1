// import React from 'react'
import './App.css'
import ProfileBuilder from './components/ProfileBuilder/ProfileBuilder'
import './components/ProfileBuilder/ProfileBuilder.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Provider Profile Builder</h1>
        <p>Create your professional profile to connect with learners</p>
      </header>
      <main>
        <ProfileBuilder />
      </main>
    </div>
  )
}

export default App
