
import { useState } from 'react'
import './App.css'
import QuoteBox from './componentes/QuoteBox'
import db from "./db/quotes.json" 

const arrayColors = ["#0303b5", "##009929", "#ff0000", "##f55000", "#fa8072", "#4c024a", "#8d4925", "#dc143c", "#026842", "#01c4e7", "#0028ff", "#491d88"]

const getRandom = (arrayElement) => {
  const quantityValues = arrayElement.length;
  const randomIndex = Math.floor(Math.random () * quantityValues);
  return arrayElement[randomIndex];
}

function App() {
  const [quote, setQuote] = useState(getRandom(db));

  const [color, setColor] = useState(getRandom(arrayColors));

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox 
        quote={quote} 
        newQuote={newQuote} 
        color={color}
      />
    </div>
  )
}

export default App
