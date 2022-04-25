import loda from './assets/33810.jpg';
import './App.css';
import { useState } from 'react';

function App()
{
  const [name, setName]=useState('Manas')
  const [events, setEvents] = useState(
    [
      {title:'raghav is best', id: 1},
      {title:'manas is best', id: 2},
      {title:'shubh is not', id: 3},

    ]
  )
  const handleClick=()=>{
    setName('Ragga')
    console.log(name)
  }
  return (
        <div className="App">
          <h1> My name is {name}</h1>
          <button onClick = {handleClick}>Change name</button>
          {
            events.map((event, index) => (
                <div key = {event.id}> <h2>{index} - {event.title}</h2></div>

            ))
          }
        </div>
      );

}
// function App()
// {
//   const [name, setName]=useState('Manas')

//   const handleClick=()=>{
//     setName('Ragga')
//     console.log(name)
//   }
//   return (
//         <div className="App">
//           <h1> My name is {name}</h1>
//           <button onClick = {handleClick}>Change name</button>
//         </div>
//       );

// }
// function App() {
//   let name = 'mario'

//   const handleClick = () => {
//     name='manas'
//     console.log(name)
//   }
//   return (
//     <div className="App">
//       <h1> My name is {name}</h1>
//       <button onClick = {handleClick}>Change name</button>
//     </div>
//   );
// }

export default App;
