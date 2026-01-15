import logo from './logo.svg';
import './App.css';

function App() {

  const pronounList = { 
    'Mr' : 'Male',
    'Ms' : 'Female',
    'Miss' : 'Female'
  };

  const handlePronoun = (event) => {
    const selectedPronoun = event.target.value;
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
          <input type='radio' />
        </div>

        <div>
          <label>Feale</label>
          <input type='radio' />
        </div>

      </header>
    </div>
  );
};

export default App;
