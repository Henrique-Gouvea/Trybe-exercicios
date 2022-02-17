import './App.css';

const array = ['mamao', 'banana', 'laranja', 'melancia']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (<ul>{array.map((item) => Task(item))}</ul>)
}

export default App;
