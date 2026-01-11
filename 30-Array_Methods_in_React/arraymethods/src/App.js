import logo from './logo.svg';
import ArrayMap from './components/ArrayMap';
import ArrayFilter from './components/ArrayFilter';
import ArrayReduce from './components/ArrayReduce';
import ArrayForEach from './components/ArrayForEach';
import ArrayFind from './components/ArrayFind';
import ArrayFindIndex from './components/ArrayFindIndex';
import './App.css';

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ArrayMap nameList={names} />
        <ArrayFilter nameList={names} />
        <ArrayReduce numberList={numbers} />
        <ArrayForEach nameList={names}/>
        <ArrayFind nameList={names} numberList={numbers} />
        <ArrayFindIndex nameList={names}/>
        
      </header>
    </div>
  );
}

export default App;
