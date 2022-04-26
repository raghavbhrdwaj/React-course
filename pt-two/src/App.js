import loda from './assets/33810.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  return (
    <div className="App">
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}
// function App()
// {


//   const [showEvents, setShowEvents]=useState(true)
//   const [events, setEvents] = useState(
//     [
//       {title:'raghav is best', id: 1},
//       {title:'manas is best', id: 2},
//       {title:'shubh is not', id: 3},

//     ]
//   )

 
//  console.log(showEvents)

//   const handleClick=(id)=>{
//     setEvents((mumeinlelo)=>{
//       return mumeinlelo.filter((event)=>{
//         return event.id!==id
//       })
//     }

//     )
//     // console.log(id)
//   }

//   return (
        
//         <div className="App"> 
//         <img src = {loda} className="App-logo"/>
//         <div>
//             <button onClick={()=>setShowEvents(false)}>
//               Hide Event
//             </button>
          
//           </div>
//           <div>
//             <button onClick={()=>setShowEvents(true)}>
//               Show Event
//             </button>
//           </div>
         

//           {
//             events.map((event, index) => (
//                 <div key = {event.id}> 
//                 <h2>{index} - {event.title}</h2>
//                 <button onClick={()=> handleClick(event.id)}>Delete</button>
//                 </div>

//             ))
//           }
//         </div>
//       );

// }

// function App()
// {
//   const [showEvent, setShowEvent]=useState(true)
  
//   const [events, setEvents] = useState(
//     [
//       {title:'raghav is best', id: 1},
//       {title:'manas is best', id: 2},
//       {title:'shubh is not', id: 3},

//     ]
//   )

 
//  console.log(showEvent)

//   const handleClick=(id)=>{
//     setEvents((mumeinlelo)=>{
//       return mumeinlelo.filter((event)=>{
//         return event.id!==id
//       })
//     }

//     )
//     console.log(id)
//   }

//   return (
//         <div className="App"> <div>
//             <button onClick={(event)=>setShowEvent(false)}>
//               Hide Event
//             </button>
          
//           </div>
//           <div>
//             <button onClick={(event)=>setShowEvent(true)}>
//               Show Event
//             </button>
//           </div>
         

//           {
//             events.map((event, index) => (
//                 <div key = {event.id}> 
//                 <h2>{index} - {event.title}</h2>
//                 <button onClick={()=> handleClick(event.id)}>Delete</button>
//                 </div>

//             ))
//           }
//         </div>
//       );

// }

// function App()
// {
//   const [name, setName]=useState('Manas')
//   const [events, setEvents] = useState(
//     [
//       {title:'raghav is best', id: 1},
//       {title:'manas is best', id: 2},
//       {title:'shubh is not', id: 3},

//     ]
//   )
//   const handleClick=()=>{
//     setName('Ragga')
//     console.log(name)
//   }
//   return (
//         <div className="App">
//           <h1> My name is {name}</h1>
//           <button onClick = {handleClick}>Change name</button>
//           {
//             events.map((event, index) => (
//                 <div key = {event.id}> 
//                 <h2>{index} - {event.title}</h2>
//                 </div>

//             ))
//           }
//         </div>
//       );

// }
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
