import React from 'react' 
import BookList from './Components/BookList';
import Navbar from './Components/Navbar'
import ThemeToggle from './Components/ThemeToggle';
import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
      </ThemeContextProvider>
       
    </div>
  );
}

export default App;
