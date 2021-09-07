import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import BookList from './Components/BookList'
import ThemeContextProvider from './Contexts/ThemeContext';


function App() {
  return (
    <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />
        </ThemeContextProvider>
    </div>
  );
}

export default App;
