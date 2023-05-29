import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Books from "./components/books";
import NavBar from "./components/navbar";
import Login from "./components/login"; 


function App() {
  const [admin, setAdmin] = useState(false);

  const setUpdated = (pAdmin) => {
    if (pAdmin) {
      setAdmin(pAdmin);
    }
  };

  return (
    <div className="App">
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login currentUser={admin} changeUser={setUpdated}  /> } />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookIsbn" element={<Books />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
