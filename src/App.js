import React from 'react'
import './App.css';
import Navbar from './Component/Navbar'
import BookList from './Component/BookList'


function App() {
  return (
    <div className="App">
       <Navbar />
       <BookList />
    </div>
  );
}

export default App;
