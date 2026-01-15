import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [gender, setGender] = useState('');

  const pronounList = { 
    'Mr' : 'Male',
    'Ms' : 'Female',
    'Miss' : 'Female'
  };

  const handlePronoun = (event) => {
    const selectedPronoun = event.target.value;
    setGender(pronounList[selectedPronoun] || ''); /* Default to empty string if no match
    if (pronounList[selectedPronoun]) {
      return pronounList[selectedPronoun];
    } else {
      return '';
    } */
  };

  return (
    <div className="App">
      <header className="App-header">

        <label htmlFor='pronoun'>Select Pronoun: </label>
        <select key={'pronoun'} onChange={handlePronoun}>
          <option value="">Select your pronoun</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Miss">Miss</option>
        </select>

        <br/>

        <input type='text' placeholder='First Name: ' />
        <input type='text' placeholder='Last Name: ' />

        <div>
          <label>Male</label>
          <input value='Male' type='radio' name='gender' checked={gender === 'Male'} />
        </div>

        <div>
          <label>Female</label>
          <input value='Female' type='radio' name='gender' checked={gender === 'Female'} />
        </div>

        <p>{gender}</p>

      </header>
    </div>
  );
};

export default App;
