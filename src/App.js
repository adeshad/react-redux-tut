import logo from './logo.svg';
import User from './User';
import './App.css';
import Home from './container/HomeContainer';

function App() {
  const obj={
    name:"adesh",
    age:22
  }
  return (
    <div className="App">
        <Home/>
    </div>
  );
}

export default App;
