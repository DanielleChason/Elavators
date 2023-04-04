import './Building/building.css';
import './Settings/settings.css';
import {Func} from './Building/building';
import {useState} from 'react';
import { Settings } from './Settings/settings';

function App() {
  const [isReady, setIsReady] = useState(false);
  const [elevatorsCount, setElevatorsCount] = useState(5);
  const [floorsCount, setFloorsCount] = useState(10);
  
  function handleSet() {
    setIsReady(true);
  }

  function handleUnset() {
    setIsReady(false);
  }

  return (
    <div className="App">
      <p className='Header'>Elevator Exercise</p>
      {(isReady && elevatorsCount > 0 && floorsCount > 0) ? 
      <Func
        elevatorsCount={elevatorsCount} 
        floorsCount={floorsCount} 
      /> : 
      <Settings 
        elevatorsCount={elevatorsCount} 
        floorsCount={floorsCount} 
        handleSet={handleSet}
        setElevatorsCount={setElevatorsCount}
        setFloorsCount={setFloorsCount}
      />}

      <button className='settingsButton' onClick={handleUnset}>Back to Settings</button>
    </div>
  );
}

export default App;
