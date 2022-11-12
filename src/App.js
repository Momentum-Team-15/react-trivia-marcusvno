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
       <h1>CATEGORIES</h1>
        <div className = 'grid'>
          <div className = 'wrapper'>
            <div className="category-cards">
                {categories.map(result=> (
                  <button key={result.id}>{result.name}</button>
                ))}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
