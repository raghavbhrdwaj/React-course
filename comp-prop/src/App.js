
import './App.css';
import Modal from './components/Modal';
import React, { useState } from 'react';
import Title from './components/Title';
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
     
      <Title title="AA GAYE" subtitle="TAMASHA DEKHNE"/>
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
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
     <Modal>
     <h1>20% off coupon code!!</h1>
      <p>The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.The code NINJA10 at the checkout.</p>
     </Modal>
     {/* <Modal>
     <h2>10% off coupon code!!</h2>
      <p>Use the code NINJA10 at the checkout.</p>
     </Modal> */}
    </div>
  );
}


export default App;
