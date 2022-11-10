import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    axios.get(`https://opentdb.com/api_category.php`)
      .then(res => {
         const newCategories = res.data.trivia_categories;

        setCategories(newCategories); 
      });
  }, []);

  return (
    <div className="App">
        <header className="title"><h1>Trivia</h1></header>
        <ul>
          {categories.map(result=> (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
