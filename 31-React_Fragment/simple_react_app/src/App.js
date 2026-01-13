import logo from './logo.svg';
import './App.css';
import OrderedList from './components/OrderedList';

function App() {

  const nameList = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'];
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <OrderedList itemList={nameList}/>
        
      </header>
    </div>
  );
}

export default App;
