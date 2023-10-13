import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';
import DifferentApi from './DifferentApi';


function App() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  
  return (
    <div className="App">
        {data && data.map((item)=>{
          return <p>{item.title}</p>
          })}



          <br/>
          <br/>
          <br />
          <DifferentApi />
    </div>
  );
}

export default App;
