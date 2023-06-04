import { useState } from "react";
import './App.css';


function App() {
  const states = [ 'Chhattisgarh', 'Gujarat', 'Maharashtra', 'Assam', 'Bihar']


  const [selectedState, setSelectedState] = useState('')
  console.log(selectedState)
  return (
    <div>
      Which State You Love The Most :
      <select onChange={(e) => { setSelectedState(e.target.value) }}>
        {
          states.map(state => {
            return <option>{state}</option>
          })
        }
      </select>
    </div>
  );
}

export default App;