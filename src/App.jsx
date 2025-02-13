import React, {useState} from 'react';
import Search from './components/search'


function App() {
  const [searchState, setSearchState] = useState('Search through movies');
 
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>

      <header>
        <img src='./hero.png' alt='Hero Banner'/>
        <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy WIthout Hassle.</h1>
      <Search searchState={searchState} setSearchState={setSearchState} />
      </header>

      </div>
    </main>
  )
}

export default App
