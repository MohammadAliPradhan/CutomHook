import useFetch from './useFetch';


function DifferentApi() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  
  return (
    <div className="App">
        {data && data.map((titus)=>{
          return <p>{titus.title}</p>
          })}
    </div>
  );
}

export default DifferentApi;